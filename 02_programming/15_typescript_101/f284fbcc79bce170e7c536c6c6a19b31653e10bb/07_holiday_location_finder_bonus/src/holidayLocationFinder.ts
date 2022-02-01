import { Interface } from "readline";
import { continents } from "./data/data";
import { handleUserInput } from "./utils/format";

console.log(
  "***Welcome to HOLIDAY LOCATION FINDER***\nThis program will help you find a location based on the continent you will input.",
);
function holidayLocationFinder(reader: Interface): void {
  console.log(`Here is the list of continent to chose from:\n`);
  continents.forEach((element: string) => console.log(`- ${element}`));
  reader.question("\n please input your choise\n", (answer: string) => {
    handleUserInput(answer)
  });
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
