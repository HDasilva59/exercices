function checkFuelLevel(anInteger) {
  if (anInteger >= 20) {
    return "Fuel level: green";
  } else if (anInteger >= 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
}

function checkCargoHold(Cargoarray) {
  const isThereSpace = Cargoarray.length - 4;

  if (isThereSpace < 0) {
    return `Spaces available: ${Math.abs(isThereSpace)}`;
  } else if (isThereSpace === 0) {
    return "Full";
  } else {
    return `Over capacity by ${isThereSpace} items.`;
  }
}

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
