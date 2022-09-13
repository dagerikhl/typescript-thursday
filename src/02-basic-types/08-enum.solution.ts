import { expect, it } from "vitest";

enum Status {
  Inactive,
  Active,
  Done,
}

it("Should give the matching integer for a Status enum", () => {
  let status: Status;

  status = Status.Inactive;
  expect(status).toBe(0);

  status = Status.Active;
  expect(status).toBe(1);

  status = Status.Done;
  expect(status).toBe(2);
});

enum WeaponType {
  Type1 = "sword",
  Type2 = "bow",
  Type3 = "hammer",
}

it("Should give the name of the weapon from the weapon type enum", () => {
  expect(WeaponType.Type1).toBe("sword");
  expect(WeaponType.Type2).toBe("bow");
  expect(WeaponType.Type3).toBe("hammer");
});
