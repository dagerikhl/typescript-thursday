let stringsAndNumbers: (never | never)[];
let personOrTable: { name: string } | { surfaceArea: number };

stringsAndNumbers = [123, "Hello", 567];
personOrTable = { name: "Kaladin", surfaceArea: 92 };
personOrTable.name = "Andolin";

// Needed to make this a module
export {};
