import { convertToKebabCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./api-route.hbs";
import generateCreateOperation from "./create";
import generateReadAllOperation from "./read-all";

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
    readAllOperation: generateReadAllOperation(modelName).slice(0, -1),
    createOperation: generateCreateOperation(modelName).slice(0, -1),
  });
}
