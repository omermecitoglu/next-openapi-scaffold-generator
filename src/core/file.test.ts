import fs from "node:fs/promises";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { appendFile, checkFile, saveFile } from "./file";

vitest.mock("node:fs/promises");

describe("File operations", () => {
  const directory = "testDir";
  const fileName = "testFile.txt";
  const content = "Hello, World!";

  beforeEach(() => {
    vitest.clearAllMocks();
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

  describe("checkFile", () => {
    it("should return true if file contains the content", async () => {
      vitest.spyOn(fs, "readFile").mockResolvedValue("Hello, World!\nOther text");

      const result = await checkFile(directory, fileName, content);

      expect(fs.readFile).toHaveBeenCalledWith(expect.any(String), "utf8");
      expect(result).toBe(true);
    });

    it("should return false if file does not contain the content", async () => {
      vitest.spyOn(fs, "readFile").mockResolvedValue("Something else");

      const result = await checkFile(directory, fileName, content);

      expect(result).toBe(false);
    });

    it("should return false if file does not exist", async () => {
      vitest.spyOn(fs, "readFile").mockRejectedValue({ code: "ENOENT" });

      const result = await checkFile(directory, fileName, content);

      expect(result).toBe(false);
    });
  });
});

