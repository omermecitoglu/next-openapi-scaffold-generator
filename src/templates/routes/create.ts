import render from "~/core/template";
import handleBarsTemplate from "./create.hbs?raw";

type CreateOperationRouteTemplate = {
  modelName: string,
};

export default function generateCreateOperationRoute(modelName: string) {
  return render<CreateOperationRouteTemplate>(handleBarsTemplate, {
    modelName,
  });
}
