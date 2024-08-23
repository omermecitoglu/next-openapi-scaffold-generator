import { convertToCamelCase, convertToKebabCase, convertToNoCase, convertToPascalCase, convertToSnakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type UpdateTestTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCasePlural: string,
  kebabCaseSingular: string,
  noCasePlural: string,
  noCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
  snakeCaseSingular: string,
};

export default function generateUpdateTest(modelName: string) {
  const template = getTemplate<UpdateTestTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: convertToCamelCase(modelName, true),
    camelCaseSingular: convertToCamelCase(modelName, false),
    kebabCasePlural: convertToKebabCase(modelName, true),
    kebabCaseSingular: convertToKebabCase(modelName, false),
    noCasePlural: convertToNoCase(modelName, true),
    noCaseSingular: convertToNoCase(modelName, false),
    pascalCasePlural: convertToPascalCase(modelName, true),
    pascalCaseSingular: convertToPascalCase(modelName, false),
    snakeCasePlural: convertToSnakeCase(modelName, true),
    snakeCaseSingular: convertToSnakeCase(modelName, false),
  });
}
