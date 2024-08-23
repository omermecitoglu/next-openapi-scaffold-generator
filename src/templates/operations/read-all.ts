import { convertToCamelCase, convertToKebabCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllOperationTemplate = {
  camelCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateReadAllOperation(modelName: string) {
  const template = getTemplate<ReadAllOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: convertToCamelCase(modelName, true),
    kebabCaseSingular: convertToKebabCase(modelName, false),
    pascalCasePlural: convertToPascalCase(modelName, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
