import { expect, it } from "vitest";

const crash = (): never => {
  throw new Error("THIS SHOULDN'T HAPPEN! :O");
};

const crashIfNotANumber = (value: any): true | never => {
  if (typeof value === "number") {
    return true;
  }

  return crash();
};

it("Should not crash with a number", () => {
  expect(crashIfNotANumber(123)).toBe(true);
});

it("Should crash when given something other than a number", () => {
  expect(() => {
    crashIfNotANumber("Wololo");
  }).toThrow();
});
