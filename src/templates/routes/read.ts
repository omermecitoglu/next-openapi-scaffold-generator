import render from "~/core/template";
import handleBarsTemplate from "./read.hbs?raw";

type ReadOperationRouteTemplate = {
  modelName: string,
};

export default function generateReadOperationRoute(modelName: string) {
  return render<ReadOperationRouteTemplate>(handleBarsTemplate, {
    modelName,
  });
}
