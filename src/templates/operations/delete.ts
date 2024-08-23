import { camelCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type DeleteOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateDeleteOperation(modelName: string) {
  const template = getTemplate<DeleteOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: camelCase(modelName, true),
    camelCaseSingular: camelCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
