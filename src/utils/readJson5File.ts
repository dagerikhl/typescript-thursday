import * as JSON5 from "json5";
import * as fs from "fs";

export const readJson5File = (filePath: string): any => {
  const content = fs.readFileSync(filePath, "utf8");

  return JSON5.parse(content);
};
