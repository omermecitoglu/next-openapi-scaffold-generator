import fs from "node:fs/promises";
import path from "node:path";

export async function saveFile(directory: string, fileName: string, content: string) {
  const dirPath = path.resolve(process.cwd(), directory);
  await fs.mkdir(dirPath, { recursive: true });
  const filePath = path.resolve(dirPath, fileName);
  await fs.writeFile(filePath, content, "utf8");
}

export async function appendFile(directory: string, fileName: string, content: string) {
  const dirPath = path.resolve(process.cwd(), directory);
  await fs.mkdir(dirPath, { recursive: true });
  const filePath = path.resolve(dirPath, fileName);
  await fs.appendFile(filePath, content + "\n", "utf8");
}

export async function checkFile(directory: string, fileName: string, content: string) {
  const dirPath = path.resolve(process.cwd(), directory);
  const filePath = path.resolve(dirPath, fileName);
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return fileContent.includes(content);
  } catch (err: unknown) {
    if (err && typeof err === "object" && "code" in err && err.code === "ENOENT") {
      return false;
    }
    throw err;
  }
}
