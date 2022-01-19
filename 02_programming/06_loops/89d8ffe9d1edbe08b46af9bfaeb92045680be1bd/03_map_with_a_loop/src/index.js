function mapLoop(numbers, functionInArgument) {
  // Code the function here.
  const mappedArray = [];
  let i = 0;
  while (i < numbers.length){
    const arrayFiller = numbers[i];
    mappedArray.push(functionInArgument(arrayFiller));
    i++;
  }

  functionInArgument(numbers);
  return mappedArray;
}




// Do not remove the following lines, it is for tests
module.exports = mapLoop;
