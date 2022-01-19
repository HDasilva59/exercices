let playerNumber;
function numberGame(reader, min = 1, max = 100) {
  console.log(`Welcome! \nYou have to find the right number, between ${min} and ${max}!\nGood luck!!\n\n`);
  const randomNumber = Math.ceil(Math.random() * (max - min)) + min;
  reader.question("Enter a number \n", (playerNumberTampon) => {
    let playerNumber = playerNumberTampon;
    letsPlayAGame(playerNumber, randomNumber, reader, min, max);
  });
  return
  ;}

function repeatTheGame(reader, randomNumber){
  reader.question("Enter a number\n", (playerNumberTampon) => {
    let playerNumber = playerNumberTampon;
    letsPlayAGame(playerNumber, randomNumber, reader);
  });
  return;};

function letsPlayAGame(playerNumber, randomNumber, reader, min, max)
{
  if (typeof playerNumber === "undefined"){
    repeatTheGame(reader, randomNumber);
  }
  else if (isNaN(playerNumber)){
    console.log("This was not a number");
    repeatTheGame(reader, randomNumber);
  }
  else if (playerNumber > max || playerNumber < min){
    console.log(`The number is between ${min} and ${max}`);
    repeatTheGame(reader, randomNumber);
  }
  else if (playerNumber > randomNumber){
    console.log("Too high");
    repeatTheGame(reader, randomNumber);
  }
  else if (playerNumber < randomNumber){
    console.log("Too low");
    repeatTheGame(reader, randomNumber);
  }
  else{
    console.log("You won");
    console.log(playerNumber);
    reader.close();
  }
  return;
}






module.exports = numberGame;
