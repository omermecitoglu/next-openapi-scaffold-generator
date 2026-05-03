import { camelCase, kebabCase, noCase, pascalCase, snakeCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadTestTemplate = {
  camelCasePlural: string,
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
};

export default function generateReadTest(modelName: string) {
  return render<ReadTestTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
