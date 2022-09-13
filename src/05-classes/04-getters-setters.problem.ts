import { expect, it } from "vitest";

class FootballPlayer {
  constructor(private _name: string, private _goals: number) {
    this._name = _name;
    this._goals = _goals;
  }

  // Task: Impl. getters and setters for all the private properties
}

it("Should get the name of the player", () => {
  const player = new FootballPlayer("Tore André", 6);

  expect(player.name).toBe("Tore André");
});
it("Should set the name of the player", () => {
  const player = new FootballPlayer("Tore André", 6);

  expect(player.name).toBe("Tore André");

  player.name = "Riise";

  expect(player.name).toBe("Riise");
});

it("Should get the number of goals of the player", () => {
  const player = new FootballPlayer("Tore André", 6);

  expect(player.goals).toBe(6);
});
it("Should set the number of gloas of the player", () => {
  const player = new FootballPlayer("Tore André", 6);

  expect(player.goals).toBe(6);

  player.goals += 2;

  expect(player.goals).toBe(8);
});
