import { expect, it } from "vitest";

const response = '{ "items": [26, 42, 58, 122], "total": 4 }';

const typedResponse: { items: number[]; total: number } = JSON.parse(response);
const anyResponse: any = JSON.parse(response);

it("Should be able to format the total count from the typed response", () => {
  expect(typedResponse.total.toFixed(3)).toStrictEqual("4.000");
});

it("Should not throw a type error when accessing things that doesn't exist on the any typed response", () => {
  expect(anyResponse.extraProp).toBeUndefined();
});
