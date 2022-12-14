import { expect, it } from "vitest";

// Task: Impl. the abstract class Song with the missing properties from ProgressiveMetalSong (PS: ProgressiveMetalSong should not be changed)

class ProgressiveMetalSong extends Song {
  constructor(
    protected readonly _name: string,
    protected readonly _length: number
  ) {
    super("progressive-metal", _name, _length);
  }

  getInfo(): { type: string; name: string; length: number; lyrics?: string } {
    return {
      type: this._type,
      name: this._name,
      length: this._length,
      lyrics: "Grrrrrrrrrrr",
    };
  }
}

it("Should be able to get the type of a progressive metal song", () => {
  const song = new ProgressiveMetalSong("We are the Sleep", 6.14);

  expect(song.type).toBe("progressive-metal");
});

it("Should be able to get the name of a progressive metal song", () => {
  const song = new ProgressiveMetalSong("We are the Sleep", 6.14);

  expect(song.name).toBe("We are the Sleep");
});

it("Should be able to get the length of a progressive metal song", () => {
  const song = new ProgressiveMetalSong("We are the Sleep", 6.14);

  expect(song.length).toBe(6.14);
});

it("Should be able to get all info of a progressive metal song", () => {
  const song = new ProgressiveMetalSong("We are the Sleep", 6.14);

  expect(song.getInfo()).toStrictEqual({
    type: "progressive-metal",
    name: "We are the Sleep",
    length: 6.14,
    lyrics: "Grrrrrrrrrrr",
  });
});
