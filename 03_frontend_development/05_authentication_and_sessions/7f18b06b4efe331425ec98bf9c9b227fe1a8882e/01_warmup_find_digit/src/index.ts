export function findDigit(anArrayOfNumbers: number[], numberToFind: number): number[] | [] {
  const resultArray = [];
  for (let i = 0; i < anArrayOfNumbers.length; i++) {
    const numberToString: string = anArrayOfNumbers[i].toString();
    const numberToFindToString = numberToFind.toString();
    if (numberToString.includes(numberToFindToString)) {
      resultArray.push(anArrayOfNumbers[i]);
    }
  }
  return resultArray;
}
