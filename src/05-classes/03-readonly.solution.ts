import { expect, it } from "vitest";

// Task: Rewrite `secret` to be a readonly propert assigned in the constructor (PS: Remember to update the test as well)
class ApiClient {
  private readonly secret: string | undefined;

  constructor(secret: string) {
    this.secret = secret;
  }

  getSecret(): string | undefined {
    return this.secret;
  }
}

it("Should set the secret of an API client", () => {
  const client = new ApiClient("Shhh");

  expect(client.getSecret()).toBe("Shhh");
});
