import { camelCase, capitalCase, noCase, pascalCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllOperationRouteTemplate = {
  camelCasePlural: string,
  capitalCasePlural: string,
  noCasePlural: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateReadAllOperationRoute(modelName: string) {
  return render<ReadAllOperationRouteTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    capitalCasePlural: capitalCase(modelName, true, false),
    noCasePlural: noCase(modelName, true),
    pascalCaseSingular: pascalCase(modelName, false),
    pascalCasePlural: pascalCase(modelName, true),
  });
}
