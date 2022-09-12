let coordinates: [number, number];
let mixedGoods: [number, true, { isActive: boolean }, Function];

coordinates = [71, 42];
mixedGoods = [
  256,
  true,
  { isActive: false },
  () => {
    console.log("Weeee!!!");
  },
];

// Needed to make this a module
export {};
