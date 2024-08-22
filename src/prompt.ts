import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const rl = readline.createInterface({ input, output });

export async function askQuestions(queries: string[]) {
  const answers = await Promise.all(queries.map(query => rl.question(query)));
  rl.close();
  return answers;
}
