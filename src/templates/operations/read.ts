import { camelCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateReadOperation(modelName: string) {
  const template = getTemplate<ReadOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: camelCase(modelName, true),
    camelCaseSingular: camelCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
