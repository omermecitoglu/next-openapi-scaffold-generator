import { camelCase, pascalCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateReadOperation(modelName: string) {
  return render<ReadOperationTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    camelCaseSingular: camelCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
