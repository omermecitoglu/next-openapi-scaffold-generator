import { camelCase, kebabCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type UpdateOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateUpdateOperation(modelName: string) {
  const template = getTemplate<UpdateOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: camelCase(modelName, true),
    camelCaseSingular: camelCase(modelName, false),
    kebabCaseSingular: kebabCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
