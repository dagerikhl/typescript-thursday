import { expect, it } from "vitest";

class Weapon {
  constructor(public type: string, public design: string) {
    this.type = type;
    this.design = design;
  }
}

// Task: Impl. a Sword class that extends the Weapon class with type given as "sword" and adds the sharpness property and the formatSword method

it("Should create a sword with a given type, design, and sharpness", () => {
  const sword = new Sword("roman", 0.34);

  expect(sword.type).toBe("sword");
  expect(sword.design).toBe("roman");
  expect(sword.sharpness).toBe(0.34);
});
