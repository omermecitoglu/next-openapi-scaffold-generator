import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "<rootDir>"],
  modulePathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/dist",
  ],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
};

export default jestConfig;
