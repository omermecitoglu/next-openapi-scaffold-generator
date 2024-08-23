import { convertToCamelCase, convertToKebabCase, convertToPascalCase, convertToSnakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type DeleteOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
  snakeCaseSingular: string,
};

export default function generateDeleteOperation(modelName: string) {
  const template = getTemplate<DeleteOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: convertToCamelCase(modelName, true),
    camelCaseSingular: convertToCamelCase(modelName, false),
    kebabCasePlural: convertToKebabCase(modelName, true),
    kebabCaseSingular: convertToKebabCase(modelName, false),
    pascalCasePlural: convertToPascalCase(modelName, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
    snakeCasePlural: convertToSnakeCase(modelName, true),
    snakeCaseSingular: convertToSnakeCase(modelName, false),
  });
}
