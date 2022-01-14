function oddEven(givenNumber) {
  // Code the function here.
  if (Number.isInteger(givenNumber) !== true) {
    console.log (`${givenNumber} is not a number.`);
  } else if (givenNumber % 2 === 0) {
    return `${givenNumber} is an even number.`;
  } else {
    return `${givenNumber} is an odd number.`;
  }
}

// Do not remove last lines, it is for tests
module.exports = oddEven;
