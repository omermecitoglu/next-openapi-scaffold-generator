import render from "~/core/template";
import handleBarsTemplate from "./model.hbs";

type ModelTemplate = {
  modelName: string,
};

export default function generateModel(modelName: string) {
  return render<ModelTemplate>(handleBarsTemplate, {
    modelName,
  });
}
