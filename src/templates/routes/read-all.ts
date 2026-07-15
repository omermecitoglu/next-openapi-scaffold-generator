import render from "~/core/template";
import handleBarsTemplate from "./read-all.hbs?raw";

type ReadAllOperationRouteTemplate = {
  modelName: string,
};

export default function generateReadAllOperationRoute(modelName: string) {
  return render<ReadAllOperationRouteTemplate>(handleBarsTemplate, {
    modelName,
  });
}
