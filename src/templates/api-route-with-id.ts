import { kebabCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./api-route-with-id.hbs";
import generateDeleteOperationRoute from "./routes/delete";
import generateReadOperationRoute from "./routes/read";
import generateUpdateOperationRoute from "./routes/update";

type ApiRouteWithIdTemplate = {
  kebabCaseSingular: string,
  pascalCaseSingular: string,
  readOperation: string,
  updateOperation: string,
  deleteOperation: string,
};

export default function generateApiRouteWithId(modelName: string) {
  const template = getTemplate<ApiRouteWithIdTemplate>(handleBarsTemplate);
  return template({
    kebabCaseSingular: kebabCase(modelName, false),
    pascalCaseSingular: pascalCase(modelName, false),
    readOperation: generateReadOperationRoute(modelName).slice(0, -1),
    updateOperation: generateUpdateOperationRoute(modelName).slice(0, -1),
    deleteOperation: generateDeleteOperationRoute(modelName).slice(0, -1),
  });
}
