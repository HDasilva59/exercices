import { reader } from "..";
import { cities } from "../data/data";
import { holidayLocationFinder } from "../holidayLocationFinder";

// Format user input.
function handleUserInput(answer: string): void {
  if (answer.toLowerCase() === "europe") {
    const randomnumber: number = Math.floor(Math.random() * cities.Europe.length + 1);
    console.log(`You chose Europe. I think you really should go prend some time in ${cities.Europe[randomnumber]}`);
    reader.close()
  } else if (answer.toLowerCase() === "north america") {
    const randomnumber: number = Math.floor(Math.random() * cities.NorthAmerica.length + 1);
    console.log(
      `You chose North America. I think you really should go prend some time in ${cities.NorthAmerica[randomnumber]}`,
    );
    reader.close()
  } else if (answer.toLowerCase() === "south america") {
    const randomnumber: number = Math.floor(Math.random() * cities.SouthAmerica.length + 1);
    console.log(
      `You chose South America. I think you really should go prend some time in ${cities.SouthAmerica[randomnumber]}`,
    );
    reader.close()
  } else if (answer.toLowerCase() === "asia") {
    const randomnumber: number = Math.floor(Math.random() * cities.Asia.length + 1);
    console.log(`You chose Asia. I think you really should go prend some time in ${cities.Asia[randomnumber]}`);
    reader.close()
  } else if (answer.toLowerCase() === "africa") {
    const randomnumber: number = Math.floor(Math.random() * cities.Africa.length + 1);
    reader.close()
    console.log(`You chose Africa. I think you really should go prend some time in ${cities.Africa[randomnumber]}`);
  } else if (answer.toLowerCase() === "oceania") {
    const randomnumber: number = Math.floor(Math.random() * cities.Oceania.length + 1);
    console.log(`You chose Oceania. I think you really should go prend some time in ${cities.Oceania[randomnumber]}`);
    reader.close()
  } else {
    holidayLocationFinder(reader);
  }
}

function sanitizeUserInput(): void{
  console.log("coucou");
}

// Leave the line below for tests to work properly.
export { sanitizeUserInput, handleUserInput };
