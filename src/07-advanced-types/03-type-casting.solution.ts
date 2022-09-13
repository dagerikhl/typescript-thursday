import { expect, it } from "vitest";

const iAmSecretelyANumber: unknown = eval("1000");
const iAmSecretelyAString: number = eval('"Hello world!"');
const iAmSecretelyADate: bigint = eval("new Date(1984, 0, 1)");

it("Should be able to add to the number variable", () => {
  // Task: Cast `iAmSecretelyANumber` to the correct type using the `as` keyword
  expect((iAmSecretelyANumber as number) + 28).toBe(1028);
});

it("Should be able to get a substring from the string variable", () => {
  // Task Cast `iAmSecretelyAString` to the correct type using the `<>` operator
  // Tip: Doesn't work? Follow the error messages
  expect((<string>(<unknown>iAmSecretelyAString)).substring(6)).toBe("world!");
});

it("Should be able to add to the number variable", () => {
  // Task: Cast `iAmSecretelyADate` to the correct type
  // Tip: Doesn't work? Follow the error messages
  expect((iAmSecretelyADate as unknown as Date).getFullYear()).toBe(1984);
});
