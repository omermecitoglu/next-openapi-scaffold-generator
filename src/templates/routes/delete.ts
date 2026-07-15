import render from "~/core/template";
import handleBarsTemplate from "./delete.hbs?raw";

type DeleteOperationRouteTemplate = {
  modelName: string,
};

export default function generateDeleteOperationRoute(modelName: string) {
  return render<DeleteOperationRouteTemplate>(handleBarsTemplate, {
    modelName,
  });
}
