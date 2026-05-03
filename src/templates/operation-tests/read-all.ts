import render from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllTestTemplate = {
  modelName: string,
};

export default function generateReadAllTest(modelName: string) {
  return render<ReadAllTestTemplate>(handleBarsTemplate, {
    modelName,
  });
}
