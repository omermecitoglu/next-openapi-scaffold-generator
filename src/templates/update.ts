import { convertToCamelCase, convertToCapitalCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./update.hbs";

type UpdateOperationTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateUpdateOperation(modelName: string) {
  const template = getTemplate<UpdateOperationTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: convertToCamelCase(modelName, false),
    capitalCasePlural: convertToCapitalCase(modelName, true, false),
    noCaseSingular: convertToNoCase(modelName, false),
    onlyFirstCapitalCaseSingular: convertToCapitalCase(modelName, false, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
