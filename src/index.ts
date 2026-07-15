#!/usr/bin/env node
import { kebabCase, pascalCase } from "change-case";
import pluralize from "pluralize";
import prompts from "prompts";
import { appendFile, checkFile, saveFile } from "./core/file";
import generateApiRoute from "./templates/api-route";
import generateApiRouteWithId from "./templates/api-route-with-id";
import generateModel from "./templates/model";
import generateCreateTest from "./templates/operation-tests/create";
import generateDeleteTest from "./templates/operation-tests/delete";
import generateReadTest from "./templates/operation-tests/read";
import generateReadAllTest from "./templates/operation-tests/read-all";
import generateUpdateTest from "./templates/operation-tests/update";
import generateCreateOperation from "./templates/operations/create";
import generateDeleteOperation from "./templates/operations/delete";
import generateReadOperation from "./templates/operations/read";
import generateReadAllOperation from "./templates/operations/read-all";
import generateUpdateOperation from "./templates/operations/update";
import generateSchema from "./templates/schema";

const { modelName } = await prompts({
  type: "text",
  name: "modelName",
  message: "Enter model name",
});

const { orm } = await prompts({
  type: "select",
  name: "orm",
  message: "Pick an ORM",
  choices: [
    { title: "Drizzle", description: "a headless TypeScript ORM with a head. 🐲", value: "drizzle" },
    { title: "none", value: null, disabled: true },
  ],
  initial: 0,
});

const { operationTests } = await prompts({
  type: "toggle",
  name: "operationTests",
  message: "Do you want to include operation tests?",
  initial: true,
  active: "yes",
  inactive: "no",
});

if (modelName) {
  await saveFile(`src/app/${kebabCase(pluralize(modelName))}`, "route.ts", generateApiRoute(modelName));
  await saveFile(`src/app/${kebabCase(pluralize(modelName))}/[id]`, "route.ts", generateApiRouteWithId(modelName));
  if (orm === "drizzle") {
    await saveFile("src/database/schema", `${kebabCase(pluralize(modelName))}.ts`, generateSchema(modelName));
    const exportStatement = `export * from "./${kebabCase(pluralize(modelName))}";`;
    const exported = await checkFile("src/database/schema", "index.ts", exportStatement);
    if (!exported) {
      await appendFile("src/database/schema", "index.ts", `export * from "./${kebabCase(pluralize(modelName))}";`);
    }
  }
  await saveFile("src/models", `${kebabCase(modelName)}.ts`, generateModel(modelName));
  await saveFile("src/operations", `find${pascalCase(modelName)}Ids.ts`, generateReadAllOperation(modelName));
  await saveFile("src/operations", `create${pascalCase(modelName)}.ts`, generateCreateOperation(modelName));
  await saveFile("src/operations", `get${pascalCase(modelName)}.ts`, generateReadOperation(modelName));
  await saveFile("src/operations", `update${pascalCase(modelName)}.ts`, generateUpdateOperation(modelName));
  await saveFile("src/operations", `delete${pascalCase(modelName)}.ts`, generateDeleteOperation(modelName));
  if (operationTests) {
    await saveFile("src/operations", `find${pascalCase(modelName)}Ids.test.ts`, generateReadAllTest(modelName));
    await saveFile("src/operations", `create${pascalCase(modelName)}.test.ts`, generateCreateTest(modelName));
    await saveFile("src/operations", `get${pascalCase(modelName)}.test.ts`, generateReadTest(modelName));
    await saveFile("src/operations", `update${pascalCase(modelName)}.test.ts`, generateUpdateTest(modelName));
    await saveFile("src/operations", `delete${pascalCase(modelName)}.test.ts`, generateDeleteTest(modelName));
  }
}
