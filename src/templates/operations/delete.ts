import render from "~/core/template";
import handleBarsTemplate from "./delete.hbs?raw";

type DeleteOperationTemplate = {
  modelName: string,
};

export default function generateDeleteOperation(modelName: string) {
  return render<DeleteOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
