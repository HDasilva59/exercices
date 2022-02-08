import {squareNumber} from "./squareNumber"

export function context(arrayOfNumbers: number[]): number[] {
  const mappedSquareNumbers:number[] = arrayOfNumbers.map(element => squareNumber(element))
  return mappedSquareNumbers
}
