import { camelCase, capitalCase, constantCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./delete.hbs";

type DeleteOperationRouteTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  constantCaseSingular: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateDeleteOperationRoute(modelName: string) {
  const template = getTemplate<DeleteOperationRouteTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: camelCase(modelName, false),
    capitalCasePlural: capitalCase(modelName, true, false),
    constantCaseSingular: constantCase(modelName, false),
    noCaseSingular: noCase(modelName, false),
    onlyFirstCapitalCaseSingular: capitalCase(modelName, false, true),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
