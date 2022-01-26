const findPosition = (arrayToCheck,stringToFind,counter) => {

  if (typeof arrayToCheck !== "object" || typeof stringToFind !== "string" || Number.isInteger(counter) === false){
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
      findPosition(arrayToCheck,stringToFind,counter + 1);
    }
  }
};

// Leave line below for tests to work properly
module.exports = findPosition;
