import { expect, it } from "vitest";

const formatName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

it("Should join the first and last name with a space", () => {
  expect(formatName("Kaladin", "Stormblessed")).toEqual("Kaladin Stormblessed");
});
