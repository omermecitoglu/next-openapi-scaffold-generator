import { convertToCapitalCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllOperationTemplate = {
  capitalCasePlural: string,
  noCasePlural: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateReadAllOperation(modelName: string) {
  const template = getTemplate<ReadAllOperationTemplate>(handleBarsTemplate);
  return template({
    capitalCasePlural: convertToCapitalCase(modelName, true, false),
    noCasePlural: convertToNoCase(modelName, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
    pascalCasePlural: convertToPascalCase(modelName, true),
  });
}
