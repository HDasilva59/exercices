import { Tree } from "./Tree";

// Code your class here.

class OrangeTree extends Tree {
  growOranges(): string[] {
    this.oranges = [];
    if (this.age > 0 && this.age < 5) {
      this.oranges = [];
    } else if (this.age >= 5 && this.age <= 10) {
      for (let orange: number = 0; orange < 10; orange++) {
        this.oranges.push("🍊");
      }
    } else if (this.age > 10 && this.age < 21) {
      for (let orange: number = 0; orange < 20; orange++) {
        this.oranges.push("🍊");
      }
    } else if (this.age > 20 && this.age < 41) {
      for (let orange: number = 0; orange < 5; orange++) {
        this.oranges.push("🍊");
      }
    }
    return this.oranges;
  }

  ageOneYear(): void {
    if (this.isAlive()) {
      this.age = this.age + 1;
      if (this.age >= 1 && this.age <= 9) {
        this.height = this.age * 25;
        this.growOranges();
      }
      if (this.age > 9 && this.age <= 20) {
        this.height = 9 * 25 + (this.age - 9) * 10;
        this.growOranges();
      }
      if (this.age > 20) {
        this.height = 335;
        this.growOranges();
      }
    } else {
      return;
    }
  }

  isAlive(): boolean {
    if (this.age < 49) {
      return (this.alive = true);
    } else if (this.age === 100) {
      return (this.alive = false);
    } else {
      const max: number = 51 - (this.age - 50);
      const standing: number = Math.floor(Math.random() * (max - 1)) + 1;
      if (standing === 1) {
        return (this.alive = false);
      } else {
        return (this.alive = true);
      }
    }
  }

  pickAnOrange(): string[] {
    if (this.oranges.length > 0) {
      const pickedorange: string[] = this.oranges.slice(this.oranges.length - 1);
      this.oranges = pickedorange;
      return this.oranges;
    }
    return this.oranges;
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
