import render from "~/core/template";
import handleBarsTemplate from "./find.hbs?raw";

type ReadAllTestTemplate = {
  modelName: string,
};

export default function generateReadAllTest(modelName: string) {
  return render<ReadAllTestTemplate>(handleBarsTemplate, {
    modelName,
  });
}
