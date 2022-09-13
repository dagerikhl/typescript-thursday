import { expect, it } from "vitest";

class ApiClient {
  private static _baseUrl: string | undefined;

  constructor() {}

  public get baseUrl(): string | undefined {
    return ApiClient._baseUrl;
  }
  public static set baseUrl(baseUrl: string | undefined) {
    ApiClient._baseUrl = baseUrl;
  }
}

it("Should share the base URL between clients", () => {
  const client1 = new ApiClient();
  const client2 = new ApiClient();
  const client3 = new ApiClient();

  ApiClient.baseUrl = "/api/v0/";

  expect(client1.baseUrl).toBe("/api/v0/");
  expect(client2.baseUrl).toBe("/api/v0/");
  expect(client3.baseUrl).toBe("/api/v0/");
});
