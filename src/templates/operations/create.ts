import render from "~/core/template";
import handleBarsTemplate from "./create.hbs?raw";

type CreateOperationTemplate = {
  modelName: string,
};

export default function generateCreateOperation(modelName: string) {
  return render<CreateOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
