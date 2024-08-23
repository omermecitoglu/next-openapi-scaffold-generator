import { camelCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./update.hbs";

type ModelTemplate = {
  camelCasePlural: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateModel(modelName: string) {
  const template = getTemplate<ModelTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: camelCase(modelName, true),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
