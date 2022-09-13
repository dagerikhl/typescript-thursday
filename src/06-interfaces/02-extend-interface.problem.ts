import { expect, it } from "vitest";

// Task: DRY up your code by rewriting these interfaces to extend each other and avoiding all duplicate lines
// Note: All tests pass for this exercise, but the code could be DRYer
interface Spell {
  type: "damage" | "healing" | "buff" | "debuff";
  school: string;
  castTime: number;
  target: "self" | "ally" | "enemy";
  range: number;
}

interface DamageSpell {
  type: "damage";
  school: string;
  castTime: number;
  target: "enemy";
  range: number;
  damage: number;
}

interface FireDamageSpell {
  type: "damage";
  school: "fire";
  castTime: number;
  target: "enemy";
  range: number;
  damage: number;
  fireDamage: number;
}

interface TouchFireDamageSpell {
  type: "damage";
  school: "fire";
  castTime: number;
  target: "enemy";
  range: 0;
  damage: number;
  fireDamage: number;
  touchRange: number;
  touchSelfDamage: number;
}

it("Spell should contain all Spell properties", () => {
  const spell: Spell = {
    type: "buff",
    school: "divine",
    castTime: 3,
    target: "ally",
    range: 300,
  };

  expect(spell).toStrictEqual({
    type: "buff",
    school: "divine",
    castTime: 3,
    target: "ally",
    range: 300,
  });
});

it("DamageSpell should contain all DamageSpell properties", () => {
  const spell: DamageSpell = {
    type: "damage",
    school: "divine",
    castTime: 3,
    target: "enemy",
    range: 300,
    damage: 500,
  };

  expect(spell).toStrictEqual({
    type: "damage",
    school: "divine",
    castTime: 3,
    target: "enemy",
    range: 300,
    damage: 500,
  });
});

it("FireDamageSpell should contain all FireDamageSpell properties", () => {
  const spell: FireDamageSpell = {
    type: "damage",
    school: "fire",
    castTime: 3,
    target: "enemy",
    range: 300,
    damage: 500,
    fireDamage: 200,
  };

  expect(spell).toStrictEqual({
    type: "damage",
    school: "fire",
    castTime: 3,
    target: "enemy",
    range: 300,
    damage: 500,
    fireDamage: 200,
  });
});

it("TouchFireDamageSpell should contain all TouchFireDamageSpell properties", () => {
  const spell: TouchFireDamageSpell = {
    type: "damage",
    school: "fire",
    castTime: 3,
    target: "enemy",
    range: 0,
    damage: 500,
    fireDamage: 200,
    touchRange: 20,
    touchSelfDamage: 0,
  };

  expect(spell).toStrictEqual({
    type: "damage",
    school: "fire",
    castTime: 3,
    target: "enemy",
    range: 0,
    damage: 500,
    fireDamage: 200,
    touchRange: 20,
    touchSelfDamage: 0,
  });
});
