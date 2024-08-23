import { expect, test } from "@jest/globals";
import { convertToCamelCase, convertToCapitalCase, convertToKebabCase, convertToNoCase, convertToPascalCase, convertToSnakeCase } from "./string";

test("convertToCamelCase", () => {
  expect(convertToCamelCase("user record", false)).toBe("userRecord");
  expect(convertToCamelCase("user record", true)).toBe("userRecords");
  expect(convertToCamelCase("user entry", false)).toBe("userEntry");
  expect(convertToCamelCase("user entry", true)).toBe("userEntries");
});

test("convertToKebabCase", () => {
  expect(convertToKebabCase("user record", false)).toBe("user-record");
  expect(convertToKebabCase("user record", true)).toBe("user-records");
  expect(convertToKebabCase("user entry", false)).toBe("user-entry");
  expect(convertToKebabCase("user entry", true)).toBe("user-entries");
});

test("convertToSnakeCase", () => {
  expect(convertToSnakeCase("user record", false)).toBe("user_record");
  expect(convertToSnakeCase("user record", true)).toBe("user_records");
  expect(convertToSnakeCase("user entry", false)).toBe("user_entry");
  expect(convertToSnakeCase("user entry", true)).toBe("user_entries");
});

test("convertToPascalCase", () => {
  expect(convertToPascalCase("user record", false)).toBe("UserRecord");
  expect(convertToPascalCase("user record", true)).toBe("UserRecords");
  expect(convertToPascalCase("user entry", false)).toBe("UserEntry");
  expect(convertToPascalCase("user entry", true)).toBe("UserEntries");
});

test("convertToNoCase", () => {
  expect(convertToNoCase("user record", false)).toBe("user record");
  expect(convertToNoCase("user record", true)).toBe("user records");
  expect(convertToNoCase("user entry", false)).toBe("user entry");
  expect(convertToNoCase("user entry", true)).toBe("user entries");
});

test("convertToCapitalCase", () => {
  expect(convertToCapitalCase("user record", false, false)).toBe("User Record");
  expect(convertToCapitalCase("user record", false, true)).toBe("User record");
  expect(convertToCapitalCase("user record", true, false)).toBe("User Records");
  expect(convertToCapitalCase("user record", true, true)).toBe("User records");
  expect(convertToCapitalCase("user entry", false, false)).toBe("User Entry");
  expect(convertToCapitalCase("user entry", false, true)).toBe("User entry");
  expect(convertToCapitalCase("user entry", true, false)).toBe("User Entries");
  expect(convertToCapitalCase("user entry", true, true)).toBe("User entries");
});
