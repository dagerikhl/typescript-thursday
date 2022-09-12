let quote: string;
let yards: number;
let isUsingTypeScript: boolean;
let language: {
  name: string;
  shortName?: string;
  isCompiled?: boolean;
};
let tags: string[];
let checkIsLanguageCompiled: (language: { isCompiled: boolean }) => boolean;

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
