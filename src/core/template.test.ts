import Handlebars from "handlebars";
import { type Mock, afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import render from "./template";

describe("render", () => {
  const templateString = "Hello, {{name}}!";
  const compiledTemplate = vi.fn();
  let handlebarsSpy: Mock;

  beforeAll(() => {
    handlebarsSpy = vi.spyOn(Handlebars, "compile").mockImplementation(() => compiledTemplate);
  });

  afterAll(() => {
    handlebarsSpy.mockRestore();
  });

  it("should parse the template with data", () => {
    const data = { name: "Omer" };
    render(templateString, data);

    expect(Handlebars.compile).toHaveBeenCalledWith(templateString);
    expect(compiledTemplate).toHaveBeenCalledWith(data);
  });
});
