type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const nameList = name.split(" ")
  const person: Person = {
    firstName: nameList[0],
    lastName: nameList[1],
  }
  return person
}
