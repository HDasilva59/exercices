import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function startCalculator() {
  reader.question("Welcome in my calculator, wanna calculate something ? (Y to stay in)\n> ", (wannaCalculate) => {
    if (wannaCalculate === "Y") {
      firstInput();
    } else {
      console.log("Hey yo, why are u calling so ?");
      reader.close();
    }
  });
}

function firstInput() {
  reader.question("Enter the first number\n> ", (firstNumber) => {
    const cleanFirstNumber = firstNumber.replace(",", ".");
    if (isNaN(cleanFirstNumber)){
      console.log("Thanks to give a number");
      firstInput();
    }
    else{
      const parsedFirstNumber = parseFloat(cleanFirstNumber);
      choseOperation(parsedFirstNumber);
      return parsedFirstNumber;
    }});
}

function choseOperation(parsedFirstNumber) {
  reader.question("Enter your operation sign please (only handle + - * / for now)\n> ", (operationSign) => {
    if (operationSign !== "+" && operationSign !== "-" && operationSign !== "*" && operationSign !== "/") {
      choseOperation(parsedFirstNumber);
      return operationSign;
    } else {
      secondInput(parsedFirstNumber, operationSign);
    }
  });
}

function secondInput(parsedFirstNumber, operationSign) {
  reader.question("Enter the second number\n> ", (secondNumber) => {
    const cleanSecondNumber = secondNumber.replace(",", ".");
    if (isNaN(cleanSecondNumber)){
      secondInput(parsedFirstNumber, operationSign);
    }
    else{
      const parsedSecondNumber = parseFloat(cleanSecondNumber);
      if (operationSign === "+"){
        sum(parsedFirstNumber, parsedSecondNumber);
      }
      else if (operationSign === "-") {
        substract(parsedFirstNumber, parsedSecondNumber);
      }
      else if (operationSign === "*") {
        multiply(parsedFirstNumber, parsedSecondNumber);
      }
      else if (operationSign === "/") {
        divide(parsedFirstNumber, parsedSecondNumber);
      }
      return parsedSecondNumber;
    }});
}

function sum (firstNumber, secondNumber){
  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
  reader.close();
}

function substract (firstNumber, secondNumber){
  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
  reader.close();
}

function multiply (firstNumber, secondNumber){
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
  reader.close();
}

function divide (firstNumber, secondNumber){
  console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
  reader.close();
}


export { startCalculator, firstInput, secondInput, choseOperation };
