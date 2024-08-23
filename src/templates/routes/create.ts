import { camelCase, capitalCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./create.hbs";

type CreateOperationRouteTemplate = {
  camelCaseSingular: string,
  capitalCasePlural: string,
  noCaseSingular: string,
  onlyFirstCapitalCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateCreateOperationRoute(modelName: string) {
  const template = getTemplate<CreateOperationRouteTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: camelCase(modelName, false),
    capitalCasePlural: capitalCase(modelName, true, false),
    noCaseSingular: noCase(modelName, false),
    onlyFirstCapitalCaseSingular: capitalCase(modelName, false, true),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
