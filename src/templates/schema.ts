import { camelCase, pascalCase, snakeCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./schema.hbs";

type SchemaTemplate = {
  camelCasePlural: string,
  pascalCasePlural: string,
  snakeCasePlural: string,
};

export default function generateSchema(modelName: string) {
  return render<SchemaTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    pascalCasePlural: pascalCase(modelName, true),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
