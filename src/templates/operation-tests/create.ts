import { camelCase, kebabCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./create.hbs";

type CreateTestTemplate = {
  camelCaseSingular: string,
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateCreateTest(modelName: string) {
  const template = getTemplate<CreateTestTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: camelCase(modelName, false),
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
