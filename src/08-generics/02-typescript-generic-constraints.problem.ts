import { expect, it } from "vitest";

// Task: Make function generic and add proper types
const getProperty = (obj: unknown, property: keyof unknown): unknown => {
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
