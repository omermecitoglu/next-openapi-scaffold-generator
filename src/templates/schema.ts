import { camelCase, pascalCase, snakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./schema.hbs";

type SchemaTemplate = {
  camelCasePlural: string,
  pascalCasePlural: string,
  snakeCasePlural: string,
};

export default function generateSchema(modelName: string) {
  const template = getTemplate<SchemaTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: camelCase(modelName, true),
    pascalCasePlural: pascalCase(modelName, true),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
