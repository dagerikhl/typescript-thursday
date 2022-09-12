import { expect, it } from "vitest";

type Entity = {
  name: string;
};

const ENTITIES: Record<string, Entity[]> = {
  heroes: [
    { name: "Kaladin" },
    { name: "Paladin" },
    { name: "Zaladin" },
    { name: "Elminster" },
  ],
  pets: [{ name: "Koda" }, { name: "Toto" }],
};

// Task: Implement a function to answer an API call, see test for expected input
const getEntities = () => {};

it("Should return the list of all heroes given no search parameters", () => {
  expect(getEntities("heroes")).toStrictEqual([
    { name: "Kaladin" },
    { name: "Paladin" },
    { name: "Zaladin" },
    { name: "Elminster" },
  ]);
});

it("Should get items from all the entity groups if given an array of entities to target", () => {
  expect(getEntities(["heroes", "pets"])).toStrictEqual([
    { name: "Kaladin" },
    { name: "Paladin" },
    { name: "Zaladin" },
    { name: "Elminster" },
    { name: "Koda" },
    { name: "Toto" },
  ]);
});

it("Should only return heroes with matching names given a regular expression to test", () => {
  expect(getEntities("heroes", /aladin$/)).toStrictEqual([
    { name: "Kaladin" },
    { name: "Paladin" },
    { name: "Zaladin" },
  ]);
});

it("Should limit the amount of items returned when given a limit", () => {
  expect(getEntities("heroes", undefined, 2)).toStrictEqual([
    { name: "Kaladin" },
    { name: "Paladin" },
  ]);
});
