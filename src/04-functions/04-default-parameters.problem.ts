import { afterEach, describe, expect, it, vi } from "vitest";

// Task: Add types to this function, make last two parameters have default values to satisfy tests
const log = (message, includeTimestamp, indent) => {
  let output = message;

  if (includeTimestamp) {
    output = `[${Date.now()}] ${output}`;
  }

  if (indent) {
    output = `${"  ".repeat(indent)}${output}`;
  }

  console.log(output);
};

describe("typescript-optional-parameters", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should log a message", () => {
    const spy = vi.spyOn(console, "log");

    log("Request sent");

    expect(spy).toHaveBeenNthCalledWith(1, "Request sent");
  });

  it("Should log a message with a timestamp", () => {
    const spy = vi.spyOn(console, "log");

    log("Request sent", true);

    expect(spy.mock.calls[0][0]).toMatch(/^\[\d{13}\] Request sent$/);
  });

  it("Should log an indented message", () => {
    const spy = vi.spyOn(console, "log");

    log("Request sent", false, 3);

    expect(spy.mock.calls[0][0]).toBe("      Request sent");
  });
});
