import { convertToKebabCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./api-route.hbs";
import generateCreateOperationRoute from "./routes/create";
import generateReadAllOperationRoute from "./routes/read-all";

type ApiRouteTemplate = {
  kebabCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
  readAllOperation: string,
  createOperation: string,
};

export default function generateApiRoute(modelName: string) {
  const template = getTemplate<ApiRouteTemplate>(handleBarsTemplate);
  return template({
    kebabCasePlural: convertToKebabCase(modelName, true),
    kebabCaseSingular: convertToKebabCase(modelName, false),
    pascalCasePlural: convertToPascalCase(modelName, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
    readAllOperation: generateReadAllOperationRoute(modelName).slice(0, -1),
    createOperation: generateCreateOperationRoute(modelName).slice(0, -1),
  });
}
