import { camelCase, kebabCase, pascalCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./create.hbs";

type CreateOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCasePlural: string,
  kebabCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateCreateOperation(modelName: string) {
  return render<CreateOperationTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    camelCaseSingular: camelCase(modelName, false),
    kebabCasePlural: kebabCase(modelName, true),
    kebabCaseSingular: kebabCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
