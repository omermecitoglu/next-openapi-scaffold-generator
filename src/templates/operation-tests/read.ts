import { convertToCamelCase, convertToKebabCase, convertToNoCase, convertToPascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadTestTemplate = {
  camelCaseSingular: string,
  kebabCaseSingular: string,
  noCaseSingular: string,
  pascalCaseSingular: string,
};

export default function generateReadTest(modelName: string) {
  const template = getTemplate<ReadTestTemplate>(handleBarsTemplate);
  return template({
    camelCaseSingular: convertToCamelCase(modelName, false),
    kebabCaseSingular: convertToKebabCase(modelName, false),
    noCaseSingular: convertToNoCase(modelName, false),
    pascalCaseSingular: convertToPascalCase(modelName, false),
  });
}
