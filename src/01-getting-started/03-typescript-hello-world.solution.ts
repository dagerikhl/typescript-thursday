import { expect, it } from "vitest";

const greetTheWorld = (name: string): string => {
  return `Hello to the world from ${name}!`;
};

it("Should return a hello world message with a given name", () => {
  expect(greetTheWorld("Kaladin Stormblessed")).toEqual(
    "Hello to the world from Kaladin Stormblessed!"
  );
});
