import { camelCase, kebabCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllOperationTemplate = {
  camelCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateReadAllOperation(modelName: string) {
  const template = getTemplate<ReadAllOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: camelCase(modelName, true),
    kebabCaseSingular: kebabCase(modelName, false),
    pascalCasePlural: pascalCase(modelName, true),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
