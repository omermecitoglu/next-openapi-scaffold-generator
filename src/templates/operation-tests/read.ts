import { kebabCase, noCase, pascalCase, snakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadTestTemplate = {
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
};

export default function generateReadTest(modelName: string) {
  return getTemplate<ReadTestTemplate>(handleBarsTemplate)({
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
