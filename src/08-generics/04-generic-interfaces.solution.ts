import { expect, it } from "vitest";

// Task: Make interface generic to handle any type of item
interface Collection<T> {
  add(key: number | string | symbol, value: T): void;
  remove(key: number | string | symbol): void;
  // Note: Supports arrays or objects
  getAll(): T[] | Record<number | string | symbol, T>;
}

class Map<K extends number | string | symbol, T> implements Collection<T> {
  private items: Record<K, T> = {} as Record<K, T>;

  add(key: K, value: T): void {
    this.items[key] = value;
  }

  remove(key: K): void {
    delete this.items[key];
  }

  getAll(): T[] | Record<string | number | symbol, T> {
    return this.items;
  }
}

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
