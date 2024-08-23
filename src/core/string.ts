import * as changeCase from "change-case";
import pluralize from "pluralize";

function capitalize(text: string) {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function camelCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return changeCase.camelCase(properText);
}

export function kebabCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return changeCase.kebabCase(properText);
}

export function snakeCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return changeCase.snakeCase(properText);
}

export function pascalCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return changeCase.pascalCase(properText);
}

export function noCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return changeCase.noCase(properText);
}

export function capitalCase(text: string, plural: boolean, onlyFirst: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  if (onlyFirst) {
    return capitalize(changeCase.noCase(properText));
  }
  return changeCase.capitalCase(properText);
}
