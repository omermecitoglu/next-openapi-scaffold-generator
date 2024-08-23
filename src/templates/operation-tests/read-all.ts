import { kebabCase, pascalCase } from "~/core/string";
import getTemplate from "~/core/template";
import handleBarsTemplate from "./read-all.hbs";

type ReadAllTestTemplate = {
  kebabCaseSingular: string,
  pascalCasePlural: string,
  pascalCaseSingular: string,
};

export default function generateReadAllTest(modelName: string) {
  const template = getTemplate<ReadAllTestTemplate>(handleBarsTemplate);
  return template({
    kebabCaseSingular: kebabCase(modelName, false),
    pascalCasePlural: pascalCase(modelName, true),
    pascalCaseSingular: pascalCase(modelName, false),
  });
}
