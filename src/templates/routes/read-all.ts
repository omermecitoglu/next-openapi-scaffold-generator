import { convertToCapitalCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllOperationRouteTemplate = {
  capitalCasePlural: string,
  noCasePlural: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateReadAllOperationRoute(modelName: string) {
  const template = getTemplate<ReadAllOperationRouteTemplate>(handleBarsTemplate);
  return template({
    capitalCasePlural: convertToCapitalCase(modelName, true, false),
    noCasePlural: convertToNoCase(modelName, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
    pascalCasePlural: convertToPascalCase(modelName, true),
  });
}
