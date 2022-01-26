const findPosition = (arrayToCheck,stringToFind,counter) => {

  if (Array.isArray(arrayToCheck) === false)
  {
    throw "An error";
  }
  else if (check(arrayToCheck) === false){
    throw "An error";
  }
  else if (typeof stringToFind !== "string") {
    throw "An error";
  }
  else if (Number.isInteger(counter) === false){
    throw "An error";
  }
  else{
    if (arrayToCheck[counter] === stringToFind){
      return `${stringToFind} is at position #${counter + 1} in this array.`;
    }
    else if (counter === arrayToCheck.length){
      return `${stringToFind} is not present in this array.`;
    }
    else {
      return findPosition(arrayToCheck,stringToFind,counter + 1);
    }
  }
};
function check(x) {
  return x.every(i => (typeof i === "string"));
}

// Leave line below for tests to work properly
module.exports = findPosition;
