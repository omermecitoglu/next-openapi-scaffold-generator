import { convertToCamelCase, convertToKebabCase, convertToPascalCase, convertToSnakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type UpdateOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
  snakeCaseSingular: string,
};

export default function generateUpdateOperation(modelName: string) {
  const template = getTemplate<UpdateOperationTemplate>(handleBarsTemplate);
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
