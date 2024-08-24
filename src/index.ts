#!/usr/bin/env node
import prompts from "prompts";
import { appendFile, saveFile } from "./core/file";
import { kebabCase, pascalCase } from "./core/string";
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

const { firstField } = await prompts({
  type: "text",
  name: "firstField",
  message: "Enter name of the first field",
  initial: "name",
});

const { operationTests } = await prompts({
  type: "toggle",
  name: "operationTests",
  message: "Do you want to include operation tests?",
  initial: true,
  active: "yes",
  inactive: "no",
});

if (modelName && firstField) {
  await saveFile(`src/app/${kebabCase(modelName, true)}`, "route.ts", generateApiRoute(modelName));
  await saveFile(`src/app/${kebabCase(modelName, true)}/[id]`, "route.ts", generateApiRouteWithId(modelName));
  if (orm === "drizzle") {
    await saveFile("src/database/schema", `${kebabCase(modelName, true)}.ts`, generateSchema(modelName));
    await appendFile("src/database/schema", "index.ts", `export * from "./${kebabCase(modelName, true)}";`);
  }
  await saveFile("src/models", `${kebabCase(modelName, false)}.ts`, generateModel(modelName));
  await saveFile("src/operations", `get${pascalCase(modelName, true)}.ts`, generateReadAllOperation(modelName));
  await saveFile("src/operations", `create${pascalCase(modelName, false)}.ts`, generateCreateOperation(modelName));
  await saveFile("src/operations", `get${pascalCase(modelName, false)}.ts`, generateReadOperation(modelName));
  await saveFile("src/operations", `update${pascalCase(modelName, false)}.ts`, generateUpdateOperation(modelName));
  await saveFile("src/operations", `delete${pascalCase(modelName, false)}.ts`, generateDeleteOperation(modelName));
  if (operationTests) {
    await saveFile("src/operations", `get${pascalCase(modelName, true)}.test.ts`, generateReadAllTest(modelName));
    await saveFile("src/operations", `create${pascalCase(modelName, false)}.test.ts`, generateCreateTest(modelName));
    await saveFile("src/operations", `get${pascalCase(modelName, false)}.test.ts`, generateReadTest(modelName));
    await saveFile("src/operations", `update${pascalCase(modelName, false)}.test.ts`, generateUpdateTest(modelName));
    await saveFile("src/operations", `delete${pascalCase(modelName, false)}.test.ts`, generateDeleteTest(modelName));
  }
}
