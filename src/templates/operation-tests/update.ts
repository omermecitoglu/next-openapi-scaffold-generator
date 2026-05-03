import render from "~/core/template";
import handleBarsTemplate from "./update.hbs";

type UpdateTestTemplate = {
  modelName: string,
};

export default function generateUpdateTest(modelName: string) {
  return render<UpdateTestTemplate>(handleBarsTemplate, {
    modelName,
  });
}
