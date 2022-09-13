import { expect, it } from "vitest";

// Task: Rewrite these type aliases to interfaces
// Note: All tests pass for this exercise, but as long as there are `type` in the file, we're not done
interface ResponseHeaders {
  [key: string]: string;
}
interface Response {
  data: any[];
  total: number;
  responseHeaders?: ResponseHeaders;
}
interface UseFetch {
  isLoading?: boolean;
  error?: Error;
  response?: Response;
}

const useFetch = (): UseFetch => {
  return {
    isLoading: false,
    response: {
      data: [123, 555],
      total: 2,
      responseHeaders: { "Content-Type": "application/json" },
    },
  };
};

it("Should fetch a response, assuming the API responds", () => {
  const fetchApi = useFetch();

  expect(fetchApi).toStrictEqual({
    isLoading: false,
    response: {
      data: [123, 555],
      total: 2,
      responseHeaders: { "Content-Type": "application/json" },
    },
  });
});
