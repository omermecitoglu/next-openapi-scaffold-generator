import { kebabCase, noCase, pascalCase, snakeCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./delete.hbs";

type DeleteTestTemplate = {
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
  snakeCasePlural: string,
};

export default function generateDeleteTest(modelName: string) {
  return render<DeleteTestTemplate>(handleBarsTemplate, {
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
    snakeCasePlural: snakeCase(modelName, true),
  });
}
