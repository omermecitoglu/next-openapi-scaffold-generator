import fs from "node:fs/promises";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { appendFile, saveFile } from "./file";

jest.mock("node:fs/promises");

describe("File operations", () => {
  const directory = "testDir";
  const fileName = "testFile.txt";
  const content = "Hello, World!";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("saveFile", () => {
    it("should create the directory and save the file", async () => {
      await saveFile(directory, fileName, content);

      expect(fs.mkdir).toHaveBeenCalledWith(expect.any(String), { recursive: true });
      expect(fs.writeFile).toHaveBeenCalledWith(expect.any(String), content, "utf8");
    });
  });

  describe("appendFile", () => {
    it("should create the directory and append content to the file", async () => {
      await appendFile(directory, fileName, content);

      expect(fs.mkdir).toHaveBeenCalledWith(expect.any(String), { recursive: true });
      expect(fs.appendFile).toHaveBeenCalledWith(expect.any(String), content + "\n", "utf8");
    });
  });
});

