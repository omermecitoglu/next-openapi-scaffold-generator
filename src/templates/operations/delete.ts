import { camelCase, kebabCase, pascalCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./delete.hbs";

type DeleteOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateDeleteOperation(modelName: string) {
  return render<DeleteOperationTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    camelCaseSingular: camelCase(modelName, false),
    kebabCasePlural: kebabCase(modelName, true),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
