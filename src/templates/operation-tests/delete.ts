import { camelCase, kebabCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type DeleteTestTemplate = {
  camelCaseSingular: string,
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateDeleteTest(modelName: string) {
  const template = getTemplate<DeleteTestTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: camelCase(modelName, false),
    kebabCaseSingular: kebabCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
