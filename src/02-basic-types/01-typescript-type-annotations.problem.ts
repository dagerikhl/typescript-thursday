let quote: never;
let yards: never;
let isUsingTypeScript: never;
let language: never;
let tags: never;
let checkIsLanguageCompiled: never;

quote = "Then I shall die as one of them!";
yards = 2045;
isUsingTypeScript = true;
language = {
  name: "TypeScript",
  shortName: "TS",
  isCompiled: true,
};
tags = ["ts", "typescript", "workshop"];
checkIsLanguageCompiled = (language) => language.isCompiled;

// Needed to make this a module
export {};
