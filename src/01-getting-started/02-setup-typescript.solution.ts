import * as path from "path";
import { CompilerOptions, transpile } from "typescript";
import { expect, it } from "vitest";
import { readJson5File } from "../utils/readJson5File";

const tsconfig = readJson5File(path.resolve(process.cwd(), "tsconfig.json"));

/**
 * Normalizes line endings to be the same type.
 */
const normalize = (content: string) => {
  return content.replace(/\r\n/g, "\n");
};

const transpileTsToJs = (
  content: string,
  compilerOptions: CompilerOptions
): string => {
  return transpile(content, compilerOptions);
};

it("Should transpile a TS file to JS, removing the types", () => {
  const tsFile = `\
const addTwo = (a: number, b: number): number => {
    return a + b;
};
`;

  expect(normalize(transpileTsToJs(tsFile, tsconfig.compilerOptions))).toBe(
    normalize(`\
"use strict";
const addTwo = (a, b) => {
    return a + b;
};
`)
  );
});

it("Should produce a different result when the target is an older version of EcmaScript", () => {
  const tsFile = `\
const addTwo = (a: number, b: number): number => {
    return a + b;
};
`;

  expect(
    normalize(
      transpileTsToJs(tsFile, { ...tsconfig.compilerOptions, target: "es3" })
    )
  ).toBe(
    normalize(`\
"use strict";
var addTwo = function (a, b) {
    return a + b;
};
`)
  );
});
