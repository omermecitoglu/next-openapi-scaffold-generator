import render from "~/core/template";
import handleBarsTemplate from "./update.hbs?raw";

type UpdateOperationTemplate = {
  modelName: string,
};

export default function generateUpdateOperation(modelName: string) {
  return render<UpdateOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
