import { camelCase, kebabCase, noCase, pascalCase, snakeCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllTestTemplate = {
  camelCasePlural: string,
  kebabCaseSingular: string,
  noCasePlural: string,
  pascalCasePlural: string,
  snakeCasePlural: string,
};

export default function generateReadAllTest(modelName: string) {
  return render<ReadAllTestTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    kebabCaseSingular: kebabCase(modelName, false),
    noCasePlural: noCase(modelName, true),
    pascalCasePlural: pascalCase(modelName, true),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
