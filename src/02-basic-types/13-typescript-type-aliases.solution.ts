import { expect, it } from "vitest";

type ValidPlusOperatorType = number | string;

const performPlusOperation = (
  a: ValidPlusOperatorType,
  b: ValidPlusOperatorType
): ValidPlusOperatorType | never => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }

  throw new Error();
};

it("Should add two numbers", () => {
  expect(performPlusOperation(10, 32)).toBe(42);
});

it("Should concatenate two strings", () => {
  expect(performPlusOperation("How you ", "doooin")).toBe("How you doooin");
});

type Hero = {
  name: string;
  weapon: string;
  level: number;
};

let hero: Hero;

hero = {
  name: "Drizzt Do'Urden",
  weapon: "Scimitar",
  level: 20,
};
hero.name = "Drizzt N'a'shezbaernon";
hero.weapon = "*Scimitars";
hero.level = 100;
