import { capitalCase, noCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllOperationRouteTemplate = {
  capitalCasePlural: string,
  noCasePlural: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateReadAllOperationRoute(modelName: string) {
  const template = getTemplate<ReadAllOperationRouteTemplate>(handleBarsTemplate);
  return template({
    capitalCasePlural: capitalCase(modelName, true, false),
    noCasePlural: noCase(modelName, true),
    pascalCaseSingular: pascalCase(modelName, false),
    pascalCasePlural: pascalCase(modelName, true),
  });
}
