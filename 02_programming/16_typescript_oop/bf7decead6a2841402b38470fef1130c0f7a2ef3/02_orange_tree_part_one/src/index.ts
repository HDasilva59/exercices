// Code the class here.
type treeAttributes = {
  age: number;
  height: number;
  alive: boolean;
};

class Tree {
  age: number;
  height: number = 0;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    if (age === 0) {
      this.height = 0;
    }
    if (age >= 1 && age <= 9) {
      this.height = age * 25;
    }
    if (age > 9 && age <= 20) {
      this.height = 9 * 25 + (this.age - 9) * 10;
    }
  }

  seed(): void {
    this.height = 0;
    this.alive = true;
    this.age = 0;
  }
}
// Leave the line below for tests to work properly.
export { Tree };
