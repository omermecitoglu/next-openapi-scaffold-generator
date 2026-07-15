import render from "~/core/template";
import handleBarsTemplate from "./api-route-with-id.hbs?raw";
import generateDeleteOperationRoute from "./routes/delete";
import generateReadOperationRoute from "./routes/read";
import generateUpdateOperationRoute from "./routes/update";

type ApiRouteWithIdTemplate = {
  modelName: string,
  readOperation: string,
  updateOperation: string,
  deleteOperation: string,
};

export default function generateApiRouteWithId(modelName: string) {
  return render<ApiRouteWithIdTemplate>(handleBarsTemplate, {
    modelName,
    readOperation: generateReadOperationRoute(modelName).slice(0, -1),
    updateOperation: generateUpdateOperationRoute(modelName).slice(0, -1),
    deleteOperation: generateDeleteOperationRoute(modelName).slice(0, -1),
  });
}
