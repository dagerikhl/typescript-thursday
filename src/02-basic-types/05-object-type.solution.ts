import { expect, it } from "vitest";

let author: {
  name: string;
  age: number;
};
let emptyBagOfHolding: {};

author = {
  name: "Dag Erik Løvgren",
  age: 30,
};
emptyBagOfHolding = {};

it("Should not have any items in the empty bag of holding", () => {
  expect(emptyBagOfHolding).toStrictEqual({});
});
