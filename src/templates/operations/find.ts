import render from "~/core/template";
import handleBarsTemplate from "./find.hbs?raw";

type ReadAllOperationTemplate = {
  modelName: string,
};

export default function generateReadAllOperation(modelName: string) {
  return render<ReadAllOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
