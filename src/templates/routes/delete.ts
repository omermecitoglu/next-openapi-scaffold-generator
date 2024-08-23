import { convertToCamelCase, convertToCapitalCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./delete.hbs";

type DeleteOperationRouteTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateDeleteOperationRoute(modelName: string) {
  const template = getTemplate<DeleteOperationRouteTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: convertToCamelCase(modelName, false),
    capitalCasePlural: convertToCapitalCase(modelName, true, false),
    noCaseSingular: convertToNoCase(modelName, false),
    onlyFirstCapitalCaseSingular: convertToCapitalCase(modelName, false, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
