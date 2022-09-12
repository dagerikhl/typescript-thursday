import { expect, it } from "vitest";

export const formatName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

it("Should join the first and last name with a space", () => {
  expect(formatName("Kaladin", "Stormblessed")).toEqual("Kaladin Stormblessed");
});
