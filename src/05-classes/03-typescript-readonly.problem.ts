import { expect, it } from "vitest";

// Task: Rewrite `secret` to be a readonly propert assigned in the constructor
class ApiClient {
  private secret: string | undefined;

  setSecret(secret: string): void {
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
