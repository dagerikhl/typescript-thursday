import { expect, it } from "vitest";

// Task: Make level a private property, spells a public property, and secretSpells only accessible to subclasses
class Sorcerer {
  level: number;
  spells: string[];
  secretSpells: string[];

  constructor(level: number, spells: string[], secretSpells: string[]) {
    this.level = level;
    this.spells = spells;
    this.secretSpells = secretSpells;
  }
}

class NpcSorcerer extends Sorcerer {
  constructor(spells: string[], secretSpells: string[]) {
    super(0, spells, secretSpells);
  }

  formatNpcSorcerer(): string {
    // Task: What about printing the level now?
    return `\
Level: ${this.level}.
Spells: ${this.spells}.
Secret spells: ${this.secretSpells}.\
`;
  }
}

it("Should format an NPC Sorcerer", () => {
  const sorcerer = new NpcSorcerer(["Fireball"], ["Nova"]);

  expect(sorcerer.formatNpcSorcerer()).toBe(`\
Level: ???.
Spells: Fireball.
Secret spells: Nova.\
`);
});
