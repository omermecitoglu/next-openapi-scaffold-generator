import { convertToKebabCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./api-route-with-id.hbs";
import generateDeleteOperation from "./delete";
import generateReadOperation from "./read";
import generateUpdateOperation from "./update";

type ApiRouteWithIdTemplate = {
  kebabCaseSingular: string,
  pascalCaseSingular: string,
  readOperation: string,
  updateOperation: string,
  deleteOperation: string,
};

export default function generateApiRouteWithId(modelName: string) {
  const template = getTemplate<ApiRouteWithIdTemplate>(handleBarsTemplate);
  return template({
    kebabCaseSingular: convertToKebabCase(modelName, false),
    pascalCaseSingular: convertToPascalCase(modelName, false),
    readOperation: generateReadOperation(modelName).slice(0, -1),
    updateOperation: generateUpdateOperation(modelName).slice(0, -1),
    deleteOperation: generateDeleteOperation(modelName).slice(0, -1),
  });
}
