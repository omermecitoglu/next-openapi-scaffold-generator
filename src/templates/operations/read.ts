import { convertToCamelCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadOperationTemplate = {
  camelCasePlural: string,
  camelCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateReadOperation(modelName: string) {
  const template = getTemplate<ReadOperationTemplate>(handleBarsTemplate);
  return template({
    camelCasePlural: convertToCamelCase(modelName, true),
    camelCaseSingular: convertToCamelCase(modelName, false),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
