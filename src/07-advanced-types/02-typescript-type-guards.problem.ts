import { expect, it } from "vitest";

class Coordinates {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Response {
  data: any[];
  total: number;
}

// Task: Impl. your own type guard asserting that the passed parameter is an object that satisfies the Response interface
const isResponse = (value: any) => {};

const formatEntity = (
  entity: boolean | number | Coordinates | unknown
): string => {
  // Task: Impl. this if condition using a typeof type guard
  if ("TODO") {
    return entity ? "YES" : "NO";
  }

  // Task: Impl. this if condition type guard
  if ("TODO") {
    return entity.toFixed(2);
  }

  // Task: Impl. this if condition with a type guard for the Coordinates class
  if ("TODO") {
    return `${entity.x}x${entity.y}`;
  }

  if (isResponse(entity)) {
    return `[TOTAL ITEMS: ${entity.total}]: DATA: ${entity.data.join(", ")}`;
  }

  return JSON.stringify(entity);
};

it("Should format a boolean correctly", () => {
  expect(formatEntity(true)).toBe("YES");
});

it("Should format a number correctly", () => {
  expect(formatEntity(16)).toBe("16.00");
});

it("Should format a Coordinates class correctly", () => {
  const coordinates = new Coordinates(71, 660);

  expect(formatEntity(coordinates)).toBe("71x660");
});

it("Should format a Response correctly", () => {
  const response: Response = {
    data: ["Soul Stone", "Carsomyr"],
    total: 2,
  };

  expect(formatEntity(response)).toBe(
    "[TOTAL ITEMS: 2]: DATA: Soul Stone, Carsomyr"
  );
});

it("Should stringify something unknown in JSON format", () => {
  const value = [true, { name: "Shallan" }, 560];

  expect(formatEntity(value)).toBe('[true,{"name":"Shallan"},560]');
});
