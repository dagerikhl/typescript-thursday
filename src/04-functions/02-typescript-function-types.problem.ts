import { expect, it } from "vitest";

type Request = {
  url: string;
  options: {
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  };
};

// Task: Impl. the type for the buildRequest function

const buildRequest: BuildRequest = (url, method, logRequest) => {
  if (logRequest) {
    console.log(`${method} ${url}`);
  }

  return { url, options: { method } };
};

it("Should return a correct request payload", () => {
  expect(buildRequest("/api/v1/todos/1", "DELETE", true)).toStrictEqual({
    url: "/api/v1/todos/1",
    options: { method: "DELETE" },
  });
});
