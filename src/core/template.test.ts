import Handlebars from "handlebars";
import { type Mock, afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import getTemplate from "./template";

describe("getTemplate", () => {
  const templateString = "Hello, {{name}}!";
  const compiledTemplate = vi.fn();
  let handlebarsSpy: Mock;

  beforeAll(() => {
    handlebarsSpy = vi.spyOn(Handlebars, "compile").mockImplementation(() => compiledTemplate);
  });

  afterAll(() => {
    handlebarsSpy.mockRestore();
  });

  it("should compile the given template string", () => {
    const template = getTemplate(templateString);

    expect(Handlebars.compile).toHaveBeenCalledWith(templateString);
    expect(template).toBe(compiledTemplate);
  });

  it("should return a function that renders the template with data", () => {
    const template = getTemplate(templateString);
    const data = { name: "Omer" };

    template(data);

    expect(compiledTemplate).toHaveBeenCalledWith(data);
  });
});
