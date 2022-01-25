const arraysIntoObjects = (keysArray, valuesArray) => {
  const ObjectArray = {
  };
  if (keysArray.length !== 0 || valuesArray.length !== 0){
    return Object.assign.apply({}, keysArray.map( (v, i) => ( {[v]: valuesArray[i]} ) ) );
  }
  else {
    return ObjectArray;
  }
};



arraysIntoObjects(["This","is","an","array"], ["This","is","an","array"]);

// Don't change this line for tests to run properly
export default arraysIntoObjects;
