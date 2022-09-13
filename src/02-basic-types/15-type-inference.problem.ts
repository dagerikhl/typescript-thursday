import { expect, it } from "vitest";

// Task: Merge declaration and initialization of these variables to utilize type inference
let name: string;
name = "Drizzt";
let level: number;
level = 20;

it("Should treat name as a string", () => {
  expect(name.substring(2)).toBe("izzt");
});
it("Should treat level as a number", () => {
  expect(level.toFixed(1)).toBe("20.0");
});

// Task: Add default values that help infer the type of the argument
const getData = (url, method, pagination) => {
  console.log(`[${method}] ${url} (${pagination.index},${pagination.limit})`);

  return [123, 333, 555];
};

it("Should return the array of data from the getData function", () => {
  expect(getData("/", "POST", { index: 0, limit: 3 })).toStrictEqual([
    123, 333, 555,
  ]);
});

const getPostNumberRegEx = (): never => /^\d{4}$/;
