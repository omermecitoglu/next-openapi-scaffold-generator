import { convertToCamelCase, convertToCapitalCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadOperationTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateReadOperation(modelName: string) {
  const template = getTemplate<ReadOperationTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: convertToCamelCase(modelName, false),
    capitalCasePlural: convertToCapitalCase(modelName, true, false),
    noCaseSingular: convertToNoCase(modelName, false),
    onlyFirstCapitalCaseSingular: convertToCapitalCase(modelName, false, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
