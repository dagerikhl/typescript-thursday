import { expect, it } from "vitest";

interface Programmer {}

const formatProgrammer = () => {};

it("Should format a programmer like a summary", () => {
  expect(formatProgrammer("Kodar", 30, true)).toEqual(
    "Name: Kodar, 30 years old, and likes coffee"
  );
});

const getSeasonedProgrammers = () => {};

it("Should get all programmers above a certain age", () => {
  const programmers: Programmer[] = [
    { name: "Kodar", age: 30 },
    { name: "Linus", age: 62 },
    { name: "Cody", age: 16 },
  ];

  expect(getSeasonedProgrammers(programmers, 40)).toEqual([
    { name: "Linus", age: 62 },
  ]);
});
