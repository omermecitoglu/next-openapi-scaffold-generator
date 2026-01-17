import { kebabCase, noCase, pascalCase, snakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllTestTemplate = {
  kebabCasePlural: string,
  kebabCaseSingular: string,
  noCasePlural: string,
  pascalCasePlural: string,
  snakeCasePlural: string,
};

export default function generateReadAllTest(modelName: string) {
  return getTemplate<ReadAllTestTemplate>(handleBarsTemplate)({
    kebabCasePlural: kebabCase(modelName, true),
    kebabCaseSingular: kebabCase(modelName, false),
    noCasePlural: noCase(modelName, true),
    pascalCasePlural: pascalCase(modelName, true),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
