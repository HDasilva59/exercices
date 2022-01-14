let number1;
let number2;

function addition(number1, number2) {
  const result = number1 + number2;
  console.log(result);
  return result;
}

function substraction(number1, number2) {
  const result = number1 - number2;
  console.log(result);
  return result;
}

function multiplication(number1, number2) {
  const result = number1 * number2;
  console.log(result);
  return result;
}

function division(number1, number2) {
  const result = number1 / number2;
  console.log(result);
  return result;
}

function chooseOperation(number1, number2, arithmeticSymbole) {
  if (Number.isInteger(number1) && Number.isInteger(number2)) {
    console.log(arithmeticSymbole);
    return arithmeticSymbole(number1, number2);
  } else {
    throw "Make sure that the both number you use are integers";
  }
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
