import render from "~/core/template";
import handleBarsTemplate from "./read.hbs?raw";

type ReadOperationTemplate = {
  modelName: string,
};

export default function generateReadOperation(modelName: string) {
  return render<ReadOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
