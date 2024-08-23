import { saveFile } from "./core/file";
import { convertToKebabCase, convertToPascalCase } from "./core/string";
import { askQuestions } from "./prompt";
import generateApiRoute from "./templates/api-route";
import generateApiRouteWithId from "./templates/api-route-with-id";
import generateModel from "./templates/model";
import generateReadAllTest from "./templates/operation-tests/read-all";
import generateReadAllOperation from "./templates/operations/read-all";
import generateSchema from "./templates/schema";

const [modelName] = await askQuestions(["Enter Model Name: "]);
await saveFile(`src/app/${convertToKebabCase(modelName, true)}`, "route.ts", generateApiRoute(modelName));
await saveFile(`src/app/${convertToKebabCase(modelName, true)}/[id]`, "route.ts", generateApiRouteWithId(modelName));
await saveFile("src/database/schema", `${convertToKebabCase(modelName, true)}.ts`, generateSchema(modelName));
await saveFile("src/models", `${convertToKebabCase(modelName, false)}.ts`, generateModel(modelName));
await saveFile("src/operations", `get${convertToPascalCase(modelName, true)}.ts`, generateReadAllOperation(modelName));
await saveFile("src/operations", `get${convertToPascalCase(modelName, true)}.test.ts`, generateReadAllTest(modelName));
