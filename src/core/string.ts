import { camelCase, capitalCase, kebabCase, noCase, pascalCase, snakeCase } from "change-case";
import pluralize from "pluralize";

function capitalize(text: string) {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function convertToCamelCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return camelCase(properText);
}

export function convertToKebabCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return kebabCase(properText);
}

export function convertToSnakeCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return snakeCase(properText);
}

export function convertToPascalCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return pascalCase(properText);
}

export function convertToNoCase(text: string, plural: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  return noCase(properText);
}

export function convertToCapitalCase(text: string, plural: boolean, onlyFirst: boolean) {
  const properText = plural ? pluralize(text) : pluralize.singular(text);
  if (onlyFirst) {
    return capitalize(noCase(properText));
  }
  return capitalCase(properText);
}
