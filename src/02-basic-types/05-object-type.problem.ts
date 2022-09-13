import { expect, it } from "vitest";

let author: never;
let emptyBagOfHolding: {};

author = {
  name: "Dag Erik Løvgren",
  age: 30,
};
emptyBagOfHolding = { item: "Twinkle" };

it("Should not have any items in the empty bag of holding", () => {
  expect(emptyBagOfHolding).toStrictEqual({});
});
