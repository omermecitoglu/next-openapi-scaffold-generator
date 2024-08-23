import { camelCase, capitalCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadOperationRouteTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateReadOperationRoute(modelName: string) {
  const template = getTemplate<ReadOperationRouteTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: camelCase(modelName, false),
    capitalCasePlural: capitalCase(modelName, true, false),
    noCaseSingular: noCase(modelName, false),
    onlyFirstCapitalCaseSingular: capitalCase(modelName, false, true),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
