// Code the class here.
type heroAttributes = {
  name: string;
};

class Hero {
  name: string;

  constructor({ name }: heroAttributes) {
    this.name = name;
  }

  sayHi (name: string):string{
    return `I'm ${this.name}`
  }
}

const batman = new Hero ({name: "Batman"})
// Leave the line below for tests to work properly.
export { Hero };
