import { expect, it } from "vitest";

class Sorcerer {
  level: number;
  spells: string[];

  constructor(level: number, spells: string[]) {
    this.level = level;
    this.spells = spells;
  }

  levelUp(): void {
    this.level++;
  }

  getSpells(limit?: number): string[] {
    return this.spells.slice(0, limit);
  }
}

it("Should level up a sorcerer", () => {
  const sorcerer = new Sorcerer(1, []);

  expect(sorcerer.level).toBe(1);

  sorcerer.levelUp();

  expect(sorcerer.level).toBe(2);
});

it("Should get the spells of a sorcerer", () => {
  const sorcerer = new Sorcerer(1, ["Fireball", "Nova"]);

  expect(sorcerer.getSpells()).toStrictEqual(["Fireball", "Nova"]);
});

it("Should get the given amount of spells of a sorcerer", () => {
  const sorcerer = new Sorcerer(1, ["Fireball", "Nova"]);

  expect(sorcerer.getSpells(1)).toStrictEqual(["Fireball"]);
});
