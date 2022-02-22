export function sumTwoSmallestNumbers(numbers: number[]): number {
const sortedNumbers = numbers.sort(function(a, b){return a-b});
if (numbers.length >= 4 && numbers.some(negative) !== true){
  return sortedNumbers[0] + sortedNumbers[1];
} else {
  console.log("test")
  throw "ATTAY";
}
}

function negative (element){
  if (element <= 0 ){
    return true
  } else {
    return false
  }
}

