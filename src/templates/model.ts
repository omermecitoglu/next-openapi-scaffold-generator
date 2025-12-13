import { camelCase, kebabCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./model.hbs";

type ModelTemplate = {
  camelCasePlural: string,
  kebabCasePlural: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateModel(modelName: string) {
  return getTemplate<ModelTemplate>(handleBarsTemplate)({
    camelCasePlural: camelCase(modelName, true),
    kebabCasePlural: kebabCase(modelName, true),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
