import render from "~/core/template";
import handleBarsTemplate from "./read-all.hbs?raw";

type ReadAllOperationTemplate = {
  modelName: string,
};

export default function generateReadAllOperation(modelName: string) {
  return render<ReadAllOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
