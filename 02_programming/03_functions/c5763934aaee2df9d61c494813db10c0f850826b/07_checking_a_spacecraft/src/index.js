// Code here
const stealthyFuelLevelCheck = (fuelLevel) => {
  if (fuelLevel > 20) {
    return "Fuel level: green";
  } else if (fuelLevel > 10 && fuelLevel < 20) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
};

const stealthyCargoHoldCheck = (anArray) => {
  const isThereSpace = anArray.length - 4;
  if (anArray.length === 4) {
    return "Full";
  } else if (isThereSpace < 0) {
    return `Spaces available: ${Math.abs(isThereSpace)}`;
  } else {
    return `Over capacity by ${isThereSpace} items.`;
  }
};
// Do not remove last lines, it is for tests

module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
