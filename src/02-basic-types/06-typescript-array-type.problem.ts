import { expect, it } from "vitest";

let indices = [];
let spells: never;
let programmers: never;

indices = [0, 1, 2, 3, 4, 5];
spells = [];
spells.push("Holy Light");
programmers = [{ name: "Linus" }, { name: "Ludvig" }];

it("indices should contain all integers from 0-5", () => {
  indices.forEach((e, i) => {
    expect(e).toBe(i);
  });
});
