import { expect, test } from "@jest/globals";
import { camelCase, capitalCase, kebabCase, noCase, pascalCase, snakeCase } from "./string";

test("camelCase", () => {
  expect(camelCase("user record", false)).toBe("userRecord");
  expect(camelCase("user record", true)).toBe("userRecords");
  expect(camelCase("user entry", false)).toBe("userEntry");
  expect(camelCase("user entry", true)).toBe("userEntries");
});

test("kebabCase", () => {
  expect(kebabCase("user record", false)).toBe("user-record");
  expect(kebabCase("user record", true)).toBe("user-records");
  expect(kebabCase("user entry", false)).toBe("user-entry");
  expect(kebabCase("user entry", true)).toBe("user-entries");
});

test("snakeCase", () => {
  expect(snakeCase("user record", false)).toBe("user_record");
  expect(snakeCase("user record", true)).toBe("user_records");
  expect(snakeCase("user entry", false)).toBe("user_entry");
  expect(snakeCase("user entry", true)).toBe("user_entries");
});

test("pascalCase", () => {
  expect(pascalCase("user record", false)).toBe("UserRecord");
  expect(pascalCase("user record", true)).toBe("UserRecords");
  expect(pascalCase("user entry", false)).toBe("UserEntry");
  expect(pascalCase("user entry", true)).toBe("UserEntries");
});

test("noCase", () => {
  expect(noCase("user record", false)).toBe("user record");
  expect(noCase("user record", true)).toBe("user records");
  expect(noCase("user entry", false)).toBe("user entry");
  expect(noCase("user entry", true)).toBe("user entries");
});

test("capitalCase", () => {
  expect(capitalCase("user record", false, false)).toBe("User Record");
  expect(capitalCase("user record", false, true)).toBe("User record");
  expect(capitalCase("user record", true, false)).toBe("User Records");
  expect(capitalCase("user record", true, true)).toBe("User records");
  expect(capitalCase("user entry", false, false)).toBe("User Entry");
  expect(capitalCase("user entry", false, true)).toBe("User entry");
  expect(capitalCase("user entry", true, false)).toBe("User Entries");
  expect(capitalCase("user entry", true, true)).toBe("User entries");
});
