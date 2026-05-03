import { kebabCase, noCase, pascalCase, snakeCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./create.hbs";

type CreateTestTemplate = {
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
};

export default function generateCreateTest(modelName: string) {
  return render<CreateTestTemplate>(handleBarsTemplate, {
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
