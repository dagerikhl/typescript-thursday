import { expect, it } from "vitest";
import fetch from "./fetch.solution";
import type { Response } from "./Response.solution";
import * as utils from "./utils.solution";

const useApi = async (
  url: string,
  urlPrefix?: string,
  parseJson?: boolean
): Promise<string | Response> => {
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
