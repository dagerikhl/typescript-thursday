import { expect, it } from "vitest";
// Task: Impl. the missing imported files as TS modules to be imported as they are here
import fetch from "./fetch.problem";
import type { Response } from "./Response.problem";
import * as utils from "./utils.problem";

// Task: Add types for the `useApi` function
const useApi = async (url, urlPrefix, parseJson): Promise<unknown> => {
  const response = await fetch(
    urlPrefix ? utils.prefixUrl(url, urlPrefix) : url
  );

  if (parseJson) {
    return utils.parseJson(response);
  } else {
    return response;
  }
};

it("Should fetch a list of items as a string", async () => {
  const response = await useApi("api/v0");

  expect(response).toBe('["api/v0", 2, 3]');
});

it("Should fetch a list of items and include the URL prefix when given", async () => {
  const response = await useApi("api/v0", "localhost");

  expect(response).toBe('["localhost/api/v0", 2, 3]');
});

it("Should fetch a list of items as a Response when parsed", async () => {
  const response = await useApi("api/v0", "localhost", true);

  expect(response).toStrictEqual(["localhost/api/v0", 2, 3]);
});
