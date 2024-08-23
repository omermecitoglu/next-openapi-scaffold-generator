import { convertToCamelCase, convertToKebabCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type CreateOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  kebabCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateCreateOperation(modelName: string) {
  const template = getTemplate<CreateOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: convertToCamelCase(modelName, true),
    camelCaseSingular: convertToCamelCase(modelName, false),
    kebabCaseSingular: convertToKebabCase(modelName, false),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
