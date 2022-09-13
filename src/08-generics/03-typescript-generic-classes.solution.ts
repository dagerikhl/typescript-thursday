import { expect, it } from "vitest";

class Quiver<T> {
  private capacity: number;
  private munitions: T[] = [];

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public isEmpty(): boolean {
    return this.munitions.length === 0;
  }

  public isFull(): boolean {
    return this.munitions.length === this.capacity;
  }

  public getAllMunitions(): T[] {
    return this.munitions;
  }

  public drawMunition(): T | undefined {
    const munition = this.munitions.pop();

    return munition;
  }

  public addMunition(munition: T): void {
    if (this.isFull()) {
      return;
    }

    this.munitions.push(munition);
  }
}

it("Should add munitions to the quiver", () => {
  type Arrow = string;

  const quiver = new Quiver<Arrow>(2);

  expect(quiver.isEmpty()).toBeTruthy();

  quiver.addMunition("Fire arrow");

  expect(quiver.getAllMunitions()).toStrictEqual(["Fire arrow"]);
});

it("Should not add more munitions than the capacity allows", () => {
  type Bullet = number;

  const quiver = new Quiver<Bullet>(2);

  expect(quiver.isEmpty()).toBeTruthy();

  quiver.addMunition(7.62);
  quiver.addMunition(7.62);
  quiver.addMunition(7.62);
  quiver.addMunition(7.62);

  expect(quiver.getAllMunitions()).toStrictEqual([7.62, 7.62]);
});

it("Should remove a drawn munition from the quiver", () => {
  type Arrow = string;

  const quiver = new Quiver<Arrow>(4);

  quiver.addMunition("Fire arrow");
  quiver.addMunition("Ice arrow");
  quiver.addMunition("Acid arrow");

  quiver.drawMunition();

  expect(quiver.getAllMunitions()).toStrictEqual(["Fire arrow", "Ice arrow"]);
});
