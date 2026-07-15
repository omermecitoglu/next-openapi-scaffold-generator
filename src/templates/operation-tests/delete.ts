import render from "~/core/template";
import handleBarsTemplate from "./delete.hbs?raw";

type DeleteTestTemplate = {
  modelName: string,
};

export default function generateDeleteTest(modelName: string) {
  return render<DeleteTestTemplate>(handleBarsTemplate, {
    modelName,
  });
}
