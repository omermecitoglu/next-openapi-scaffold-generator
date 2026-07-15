import render from "~/core/template";
import handleBarsTemplate from "./api-route.hbs?raw";
import generateCreateOperationRoute from "./routes/create";
import generateReadAllOperationRoute from "./routes/read-all";

type ApiRouteTemplate = {
  modelName: string,
  readAllOperation: string,
  createOperation: string,
};

export default function generateApiRoute(modelName: string) {
  return render<ApiRouteTemplate>(handleBarsTemplate, {
    modelName,
    readAllOperation: generateReadAllOperationRoute(modelName).slice(0, -1),
    createOperation: generateCreateOperationRoute(modelName).slice(0, -1),
  });
}
