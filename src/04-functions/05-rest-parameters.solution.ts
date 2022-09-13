import { expect, it } from "vitest";

// Task: Make this function take any number of parameters
function getProduct(...numbers: number[]): number {
  return numbers.reduce((res, cur) => res * cur, 1);
}

it("Should get the product of two numbers", () => {
  expect(getProduct(10, 5)).toBe(50);
});

it("Should get the product of many numbers", () => {
  expect(getProduct(10, 5, 10, 2, 3, 5, 24)).toBe(360000);
  expect(getProduct(10, 5, 10, 2, 3, 5, 24, 1)).toBe(360000);
  expect(getProduct(10, 5, 10, 2, 3, 5, 24, 1, 10, 10, 10)).toBe(360000000);
});
