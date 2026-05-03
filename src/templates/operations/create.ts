import render from "~/core/template";
import handleBarsTemplate from "./create.hbs";

type CreateOperationTemplate = {
  modelName: string,
};

export default function generateCreateOperation(modelName: string) {
  return render<CreateOperationTemplate>(handleBarsTemplate, {
    modelName,
  });
}
