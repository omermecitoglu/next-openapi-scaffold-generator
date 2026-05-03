import { camelCase, capitalCase, constantCase, kebabCase, noCase, pascalCase, sentenceCase, snakeCase } from "change-case";
import Handlebars from "handlebars";
import pluralize from "pluralize";

export default function render<T>(input: string, params?: T) {
  Handlebars.registerHelper({
    camelCase(text: string, form: "plural" | "singular") {
      return camelCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
    kebabCase(text: string, form: "plural" | "singular") {
      return kebabCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
    snakeCase(text: string, form: "plural" | "singular") {
      return snakeCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
    pascalCase(text: string, form: "plural" | "singular") {
      return pascalCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
    noCase(text: string, form: "plural" | "singular") {
      return noCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
    constantCase(text: string, form: "plural" | "singular") {
      return constantCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
    capitalCase(text: string, form: "plural" | "singular") {
      return capitalCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
    sentenceCase(text: string, form: "plural" | "singular") {
      return sentenceCase(form === "plural" ? pluralize(text) : pluralize.singular(text));
    },
  });
  return Handlebars.compile<T>(input)(params ?? ({} as T));
}
