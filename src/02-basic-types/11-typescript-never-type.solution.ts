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

it("Should", () => {
  expect(crashIfNotANumber(123)).toBe(true);
});

it("Should 2", () => {
  expect(() => {
    crashIfNotANumber("Wololo");
  }).toThrow();
});
