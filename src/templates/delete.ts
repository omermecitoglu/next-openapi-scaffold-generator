import { convertToCamelCase, convertToCapitalCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./delete.hbs";

type DeleteOperationTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateDeleteOperation(modelName: string) {
  const template = getTemplate<DeleteOperationTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: convertToCamelCase(modelName, false),
    capitalCasePlural: convertToCapitalCase(modelName, true, false),
    noCaseSingular: convertToNoCase(modelName, false),
    onlyFirstCapitalCaseSingular: convertToCapitalCase(modelName, false, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
