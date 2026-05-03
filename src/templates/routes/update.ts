import render from "~/core/template";
import handleBarsTemplate from "./update.hbs";

type UpdateOperationRouteTemplate = {
  modelName: string,
};

export default function generateUpdateOperationRoute(modelName: string) {
  return render<UpdateOperationRouteTemplate>(handleBarsTemplate, {
    modelName,
  });
}
