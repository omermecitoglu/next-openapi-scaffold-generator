import { convertToCamelCase, convertToKebabCase, convertToPascalCase, convertToSnakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type CreateOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
  snakeCaseSingular: string,
};

export default function generateCreateOperation(modelName: string) {
  const template = getTemplate<CreateOperationTemplate>(handleBarsTemplate);
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
