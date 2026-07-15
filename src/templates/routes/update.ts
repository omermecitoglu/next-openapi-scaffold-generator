import render from "~/core/template";
import handleBarsTemplate from "./update.hbs?raw";

type UpdateOperationRouteTemplate = {
  modelName: string,
};

export default function generateUpdateOperationRoute(modelName: string) {
  return render<UpdateOperationRouteTemplate>(handleBarsTemplate, {
    modelName,
  });
}
