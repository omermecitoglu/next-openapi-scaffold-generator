import render from "~/core/template";
import handleBarsTemplate from "./schema.hbs";

type SchemaTemplate = {
  modelName: string,
};

export default function generateSchema(modelName: string) {
  return render<SchemaTemplate>(handleBarsTemplate, {
    modelName,
  });
}
