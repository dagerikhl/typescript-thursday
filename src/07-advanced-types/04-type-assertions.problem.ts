import { expect, it } from "vitest";

const getFirstSymbol = (x: number | string): number | string => {
  if (typeof x === "number") {
    return +`${x}`[0];
  }

  return x[0];
};

it("Should treat strings as strings", () => {
  // Task: Assert this type is a string
  const output = getFirstSymbol("Matrix");

  expect(output.charAt(0)).toBe("M");
});

it("Should treat numbers as numbers", () => {
  // Task: Assert this type is a number
  const output = getFirstSymbol(6006);

  expect(output + 10).toBe(16);
});
