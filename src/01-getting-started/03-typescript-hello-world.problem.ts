import { expect, it } from "vitest";

const greetTheWorld = () => {};

it("Should return a hello world message with a given name", () => {
  expect(greetTheWorld("Kaladin Stormblessed")).toEqual(
    "Hello to the world from Kaladin Stormblessed!"
  );
});
