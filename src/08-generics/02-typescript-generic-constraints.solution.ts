import { expect, it } from "vitest";

// Task: Make function generic and add proper types
const getProperty = <T extends object>(
  obj: T,
  property: keyof T
): T[keyof T] => {
  return obj[property];
};

it("Should get a property with the correct type", () => {
  const obj = {
    height: 1.91,
    astagmatism: true,
  };

  expect(getProperty(obj, "height")).toBe(1.91);
  expect(getProperty(obj, "astagmatism")).toBe(true);
});
