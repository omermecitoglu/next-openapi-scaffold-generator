import render from "~/core/template";
import handleBarsTemplate from "./create.hbs";

type CreateTestTemplate = {
  modelName: string,
};

export default function generateCreateTest(modelName: string) {
  return render<CreateTestTemplate>(handleBarsTemplate, {
    modelName,
  });
}
