import { convertToCamelCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type DeleteOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateDeleteOperation(modelName: string) {
  const template = getTemplate<DeleteOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: convertToCamelCase(modelName, true),
    camelCaseSingular: convertToCamelCase(modelName, false),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
