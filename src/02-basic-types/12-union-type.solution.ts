let stringsAndNumbers: (string | number)[];
let personOrTable: { name: string } | { surfaceArea: number };

stringsAndNumbers = [123, "Hello", 567];
personOrTable = { name: "Kaladin" };
personOrTable.name = "Andolin";

// Needed to make this a module
export {};
