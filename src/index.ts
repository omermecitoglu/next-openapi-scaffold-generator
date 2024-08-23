import { saveFile } from "./core/file";
import { convertToKebabCase } from "./core/string";
import { askQuestions } from "./prompt";
import generateApiRoute from "./templates/api-route";
import generateApiRouteWithId from "./templates/api-route-with-id";
import generateSchema from "./templates/schema";

const [modelName] = await askQuestions(["Enter Model Name: "]);
await saveFile(`src/app/${convertToKebabCase(modelName, true)}`, "route.ts", generateApiRoute(modelName));
await saveFile(`src/app/${convertToKebabCase(modelName, true)}/[id]`, "route.ts", generateApiRouteWithId(modelName));
await saveFile("src/database/schema", `${convertToKebabCase(modelName, true)}.ts`, generateSchema(modelName));
