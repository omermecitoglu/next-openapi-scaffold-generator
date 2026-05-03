import render from "~/core/template";
import handleBarsTemplate from "./read.hbs";

type ReadTestTemplate = {
  modelName: string,
};

export default function generateReadTest(modelName: string) {
  return render<ReadTestTemplate>(handleBarsTemplate, {
    modelName,
  });
}
