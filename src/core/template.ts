import Handlebars from "handlebars";

export default function render<T>(input: string, params: T) {
  return Handlebars.compile<T>(input)(params);
}
