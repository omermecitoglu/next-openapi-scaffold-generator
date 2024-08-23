import { camelCase, kebabCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type UpdateTestTemplate = {
  camelCaseSingular: string,
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateUpdateTest(modelName: string) {
  const template = getTemplate<UpdateTestTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: camelCase(modelName, false),
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
