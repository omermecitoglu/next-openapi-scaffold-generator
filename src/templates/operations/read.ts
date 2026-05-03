import render from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadOperationTemplate = {
  modelName: string,
};

export default function generateReadOperation(modelName: string) {
  return render<ReadOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
