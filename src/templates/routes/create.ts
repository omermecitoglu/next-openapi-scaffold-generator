import { convertToCamelCase, convertToCapitalCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./create.hbs";

type CreateOperationRouteTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateCreateOperationRoute(modelName: string) {
  const template = getTemplate<CreateOperationRouteTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: convertToCamelCase(modelName, false),
    capitalCasePlural: convertToCapitalCase(modelName, true, false),
    noCaseSingular: convertToNoCase(modelName, false),
    onlyFirstCapitalCaseSingular: convertToCapitalCase(modelName, false, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
