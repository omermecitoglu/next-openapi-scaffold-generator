import { kebabCase, noCase, pascalCase, snakeCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./update.hbs";

type UpdateTestTemplate = {
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
};

export default function generateUpdateTest(modelName: string) {
  return getTemplate<UpdateTestTemplate>(handleBarsTemplate)({
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
