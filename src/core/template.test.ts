import { beforeAll, describe, expect, it, jest } from "@jest/globals";
import Handlebars from "handlebars";
import getTemplate from "./template";

jest.mock("handlebars");

describe("getTemplate", () => {
  const templateString = "Hello, {{name}}!";
  const compiledTemplate = jest.fn();

  beforeAll(() => {
    (Handlebars.compile as jest.Mock).mockImplementation(() => compiledTemplate);
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
