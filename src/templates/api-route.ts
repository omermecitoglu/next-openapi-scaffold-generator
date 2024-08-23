import { kebabCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./api-route.hbs";
import generateCreateOperationRoute from "./routes/create";
import generateReadAllOperationRoute from "./routes/read-all";

type ApiRouteTemplate = {
  kebabCasePlural: string,
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
  readAllOperation: string,
  createOperation: string,
};

export default function generateApiRoute(modelName: string) {
  const template = getTemplate<ApiRouteTemplate>(handleBarsTemplate);
  return template({
    kebabCasePlural: kebabCase(modelName, true),
    kebabCaseSingular: kebabCase(modelName, false),
    pascalCasePlural: pascalCase(modelName, true),
    pascalCaseSingular: pascalCase(modelName, false),
    readAllOperation: generateReadAllOperationRoute(modelName).slice(0, -1),
    createOperation: generateCreateOperationRoute(modelName).slice(0, -1),
  });
}
