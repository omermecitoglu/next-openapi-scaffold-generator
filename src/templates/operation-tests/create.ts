import { convertToCamelCase, convertToKebabCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type CreateTestTemplate = {
  camelCaseSingular: string,
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateCreateTest(modelName: string) {
  const template = getTemplate<CreateTestTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: convertToCamelCase(modelName, false),
    kebabCaseSingular: convertToKebabCase(modelName, false),
    noCaseSingular: convertToNoCase(modelName, false),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
