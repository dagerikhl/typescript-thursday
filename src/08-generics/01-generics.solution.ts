import { expect, it } from "vitest";

const GLOBAL_STATE: Record<string, any> = {};
let globalId = -1;

// Task: Make this function generic to handle any type of value
const useState = <T>(initialValue?: T): [() => T, (value: T) => void] => {
  globalId++;

  const id = `USE_STATE_${globalId}`;
  GLOBAL_STATE[id] = initialValue;

  const getState = () => GLOBAL_STATE[id];

  const setState = (value: T) => {
    GLOBAL_STATE[id] = value;
  };

  return [getState, setState];
};

it("Should initialize a state with the same type it was given using type inference", () => {
  // Task: Utilize type inference by setting giving the function an initialValue
  const [getState, setState] = useState(123);

  setState(getState() + 100);

  expect(getState()).toBe(223);
  expect(typeof getState()).toBe("number");
});

it("Should initialize a state with the same type it was given using explicit type", () => {
  // Task: Explicitly set the generic type of the function
  const [getState, setState] = useState<number>();

  setState((getState() ?? 0) + 100);

  expect(getState()).toBe(100);
  expect(typeof getState()).toBe("number");
});

// Task: Write a generic function that can take an array of any type and give back the last element of the array, _preserving the type of the returned item_
const getLastItem = <T>(arr: T[]): T => arr[arr.length - 1];

it("Should take any array of types and give back the last element of the array, and perform an operation on it", () => {
  const boolArr = [true, true, false];
  const boolLastItem = getLastItem(boolArr);
  expect(boolLastItem && true).toBe(false);

  const numberArr = [1, 2];
  const numberLastItem = getLastItem(numberArr);
  expect(numberLastItem + 22).toBe(24);

  const stringArr = ["1", "2"];
  const stringLastItem = getLastItem(stringArr);
  expect(stringLastItem + 22).toBe("222");

  const objArr = [{ x: 16 }, { x: 64 }];
  const objLastItem = getLastItem(objArr);
  expect(objLastItem.x + 62).toBe(126);

  const arrArr = [
    [1, 2, 3],
    [2, 4, 8],
  ];
  const arrLastItem = getLastItem(arrArr);
  expect(arrLastItem.slice(1)).toStrictEqual([4, 8]);
});
