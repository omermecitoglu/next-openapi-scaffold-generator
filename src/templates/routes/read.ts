import { camelCase, capitalCase, constantCase, noCase, pascalCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadOperationRouteTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  constantCaseSingular: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateReadOperationRoute(modelName: string) {
  return render<ReadOperationRouteTemplate>(handleBarsTemplate, {
    camelCaseSingular: camelCase(modelName, false),
    capitalCasePlural: capitalCase(modelName, true, false),
    constantCaseSingular: constantCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    onlyFirstCapitalCaseSingular: capitalCase(modelName, false, true),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
