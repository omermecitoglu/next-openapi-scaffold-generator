import { camelCase, kebabCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./update.hbs";

type UpdateTestTemplate = {
  camelCaseSingular: string,
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
  firstField: string,
};

export default function generateUpdateTest(modelName: string, firstField: string) {
  const template = getTemplate<UpdateTestTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: camelCase(modelName, false),
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
    firstField,
  });
}
