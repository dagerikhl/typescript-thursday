import { expect, it } from "vitest";

class Sorcerer {
  level;
  spells;

  constructor(level, spells) {
    this.level = level;
    this.spells = spells;
  }

  levelUp() {
    this.level++;
  }

  getSpells(limit) {
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
