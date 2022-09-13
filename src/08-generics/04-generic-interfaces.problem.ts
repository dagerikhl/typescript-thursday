import { expect, it } from "vitest";

// Task: Make interface generic to handle any type of item
interface Collection {
  add(key: number | string | symbol, value: number): void;
  remove(key: number | string | symbol): void;
  // Note: Supports arrays or objects
  getAll(): number[] | Record<number | string | symbol, number>;
}

// Task: Make a generic class that impl. the generic Collection interface and its methods
class Map implements Collection {}

it("Should add items to a Map", () => {
  const map = new Map();

  map.add("ts", "TypeScript");
  map.add("go", "Google Go");

  expect(map.getAll()).toStrictEqual({
    ts: "TypeScript",
    go: "Google Go",
  });
});

it("Should remove items from a Map", () => {
  const map = new Map();

  map.add("ts", { name: "TypeScript", primarilyUsedForWeb: true });
  map.add("go", { name: "Google Go", primarilyUsedForWeb: false });

  expect(map.getAll()).toStrictEqual({
    ts: { name: "TypeScript", primarilyUsedForWeb: true },
    go: { name: "Google Go", primarilyUsedForWeb: false },
  });

  map.remove("go");

  expect(map.getAll()).toStrictEqual({
    ts: { name: "TypeScript", primarilyUsedForWeb: true },
  });
});
