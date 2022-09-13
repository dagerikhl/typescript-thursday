import { afterEach, describe, expect, it, vi } from "vitest";

// Task: Add 3 overload signatures to satisfy each test
function fetch(request, onSent): [] {
  let requestTarget: string;
  if (typeof request === "string") {
    requestTarget = request;
  } else {
    requestTarget = `[${request.method}] ${request.url}`;
  }

  console.log("Fetching:", requestTarget);

  if (onSent) {
    onSent();
  }

  return [];
}

// Task: How would you do this with arrow functions?
// Tip: We have to use a function type signature with a function signature entry for each overload
// Tip 2: The implementation signature must also be typed
type Get = {
  (): [];
  (): [];
};
const get: Get = (request, onSent) => {
  console.log("Getting:", request);

  if (onSent) {
    onSent();
  }

  return [];
};

describe("typescript-function-overloadings", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("fetch", () => {
    it("Should be able to fetch with only a string", () => {
      const spy = vi.spyOn(console, "log");

      fetch("/api");

      expect(spy).toHaveBeenCalledWith("Fetching:", "/api");
    });

    it("Should be able to fetch with a request", () => {
      const spy = vi.spyOn(console, "log");

      fetch({ url: "/api", method: "POST" });

      expect(spy).toHaveBeenCalledWith("Fetching:", "[POST] /api");
    });

    it("Should be able to fetch with a request and call the onSent callback", () => {
      const spy = vi.spyOn(console, "log");
      const callbackSpy = vi.fn();

      fetch({ url: "/api", method: "POST" }, callbackSpy);

      expect(spy).toHaveBeenCalledWith("Fetching:", "[POST] /api");
      expect(callbackSpy).toHaveBeenCalled();
    });
  });

  describe("get", () => {
    it("Should be able to get with an url", () => {
      const spy = vi.spyOn(console, "log");

      get("/api");

      expect(spy).toHaveBeenCalledWith("Getting:", "/api");
    });

    it("Should be able to get with an url and call the onSent callback", () => {
      const spy = vi.spyOn(console, "log");
      const callbackSpy = vi.fn();

      get("/api", callbackSpy);

      expect(spy).toHaveBeenCalledWith("Getting:", "/api");
      expect(callbackSpy).toHaveBeenCalled();
    });
  });
});
