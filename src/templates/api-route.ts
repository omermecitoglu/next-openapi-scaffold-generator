import { camelCase, kebabCase, pascalCase } from "~/core/string";
import render from "~/core/template";
import handleBarsTemplate from "./api-route.hbs";
import generateCreateOperationRoute from "./routes/create";
import generateReadAllOperationRoute from "./routes/read-all";

type ApiRouteTemplate = {
  camelCasePlural: string,
  kebabCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
  readAllOperation: string,
  createOperation: string,
};

export default function generateApiRoute(modelName: string) {
  return render<ApiRouteTemplate>(handleBarsTemplate, {
    camelCasePlural: camelCase(modelName, true),
    kebabCasePlural: kebabCase(modelName, true),
    kebabCaseSingular: kebabCase(modelName, false),
    pascalCasePlural: pascalCase(modelName, true),
    pascalCaseSingular: pascalCase(modelName, false),
    readAllOperation: generateReadAllOperationRoute(modelName).slice(0, -1),
    createOperation: generateCreateOperationRoute(modelName).slice(0, -1),
  });
}
