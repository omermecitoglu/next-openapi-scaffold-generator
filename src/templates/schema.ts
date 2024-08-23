import { convertToCamelCase, convertToPascalCase, convertToSnakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./update.hbs";

type SchemaTemplate = {
  camelCasePlural: string,
  pascalCasePlural: string,
  snakeCasePlural: string,
};

export default function generateSchema(modelName: string) {
  const template = getTemplate<SchemaTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: convertToCamelCase(modelName, true),
    pascalCasePlural: convertToPascalCase(modelName, true),
    snakeCasePlural: convertToSnakeCase(modelName, true),
  });
}
