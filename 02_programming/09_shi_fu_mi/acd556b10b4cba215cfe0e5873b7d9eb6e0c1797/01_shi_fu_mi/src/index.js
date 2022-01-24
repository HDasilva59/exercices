let gamemode = 0;
const readline = require("readline");
let lastWinner = 0;
let RoundsP1 = 0;
let RoundsP2 = 0;

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayChoices = ["Rock", "Paper", "Scissors"];

function ChoiseGameStyle() {
  reader.question("Choise a game mode please (IA Game, 1v1 One, 1v1 Three)\n> ", (playerGameMode) => {
    if (playerGameMode === "IA Game"){
      startAShifumiIAGame();
    }
    else if (playerGameMode === "1v1 One"){
      startAShifumiGameOneVsOneGame();
    }
    else if (playerGameMode === "1v1 Three"){
      console.log("Welcome to ShiFuMi\n You're going to play vs an other human on three round !");
      startAShifumiGameOneVsOneGame3rounds();
    }
  }
  );
};

function startAShifumiIAGame() {
  console.log("Welcome to ShiFuMi\n You're going to play vs the AI");
  const IAChoise = Math.floor(Math.random() * 3); //generate a number between 0 & 2
  const playerTwoBufferValue = arrayChoices[IAChoise];
  reader.question("Player one, please choose a number between 1 and 3 (1 is Rock, 2 is Paper and 3 is Scissors)\n> ", (playerBufferValue) => {
    playShifumi(playerBufferValue ,playerTwoBufferValue , gamemode = startAShifumiIAGame);
  });
}


function startAShifumiGameOneVsOneGame(){
  console.log("Welcome to ShiFuMi\n You're going to play vs an other human on one round !");
  reader.question("Player one, please choose a number between 1 and 3 (1 is Rock, 2 is Paper and 3 is Scissors)\n> ", (playerBufferValue) => {
    reader.question("Player two, please choose a number between 1 and 3 (1 is Rock, 2 is Paper and 3 is Scissors)\n> ", (playerTwoBufferValue) => {
      const playerTwoValue = arrayChoices[playerTwoBufferValue - 1];
      playShifumi(playerBufferValue, playerTwoValue, gamemode = startAShifumiGameOneVsOneGame);
    });
  });
}

function startAShifumiGameOneVsOneGame3rounds (RoundsP1, RoundsP2) {
  if (RoundsP1 === 3){
    console.log("Player 1 won the game!");
    RoundsP1 = 0;
  }

  else if (RoundsP2 === 3){
    console.log("Player 2 won the game!");
    RoundsP1 = 0;
  }
  reader.question("Player one, please choose a number between 1 and 3 (1 is Rock, 2 is Paper and 3 is Scissors)\n> ", (playerBufferValue) => {
    reader.question("Player two, please choose a number between 1 and 3 (1 is Rock, 2 is Paper and 3 is Scissors)\n> ", (playerTwoBufferValue) => {
      const playerTwoValue = arrayChoices[playerTwoBufferValue - 1];
      playShifumi(playerBufferValue, playerTwoValue, gamemode = startAShifumiGameOneVsOneGame3rounds, );
    });
  });
}

function playShifumi(playerBufferValue ,playerTwoBufferValue, gamemode){
  if ((playerBufferValue === "1" || playerBufferValue === "2" || playerBufferValue === "3") &&
  (playerTwoBufferValue === "Scissors" || playerTwoBufferValue === "Rock" || playerTwoBufferValue === "Paper"))
  {
    let playerValue = arrayChoices[playerBufferValue - 1];
    drawMoves(playerValue, playerTwoBufferValue);
    if (playerValue === playerTwoBufferValue){
      console.log("It's a draw");
      lastWinner = "none";
    }
    else if (playerValue === "Rock" && playerTwoBufferValue === "Paper"){
      console.log("Player Two won the round");
      lastWinner = "player 2";
    }
    else if (playerValue === "Rock" && playerTwoBufferValue === "Scissors"){
      console.log("Player One won the round");
      lastWinner = "player 1";
    }
    else if (playerValue === "Paper" && playerTwoBufferValue === "Rock" ){
      console.log("Player Two won the round");
      lastWinner = "player 2";
    }
    else if (playerValue === "Paper" && playerTwoBufferValue === "Scissors" ){
      console.log("Player one won the round");
      lastWinner = "player 1";
    }
    else if (playerValue === "Scissors" && playerTwoBufferValue === "Rock" ){
      console.log("Player Two won the round");
      lastWinner = "player 2";
    }
    else if (playerValue === "Scissors" && playerTwoBufferValue === "Paper" ){
      console.log("Player One won the round");
      lastWinner = "player 1";
    }
    if (lastWinner === "player 1" && gamemode === startAShifumiGameOneVsOneGame3rounds){
      RoundsP1++;
      startAShifumiGameOneVsOneGame3rounds(RoundsP1, RoundsP2);
    }
    else if (lastWinner === "player 2" && gamemode === startAShifumiGameOneVsOneGame3rounds){
      RoundsP2++;
      startAShifumiGameOneVsOneGame3rounds(RoundsP1, RoundsP2);
    }
    else {
      console.log("You should both choise a number between 1 and 3 (include)");
      gamemode();
    }
    if (gamemode !== startAShifumiGameOneVsOneGame3rounds){
      console.log("j'ai pas eu le temps");
    }
  };
}


//Draw the plays
function drawMoves (playerBufferValue, playerTwoBufferValue) {
  if (playerBufferValue === "Rock") {
    console.log("Player one play :\n",[
      "    ________        ",
      "---'   _ ,  |       ",
      "      (__(__)       ",
      "      (_____)       ",
      "      (____)        ",
      "---.__(___)         ",
    ]);
  }
  else if (playerBufferValue === "Paper"){
    console.log("Player one play :\n",[
      "      _______       ",
      "----'    ____)____  ",
      "            _______)",
      "            _______)",
      "           _______) ",
      "----.__________)    ",
    ]);
  }
  else if (playerBufferValue === "Scissors"){
    console.log ("Player one play :\n",[
      "    ____           ",
      "---'    |________  ",
      "     (__)________) ",
      "        _________) ",
      "      (____)       ",
      "---.__(___)        ",
    ]);
  }


  if (playerTwoBufferValue === "Rock") {
    console.log("Player two play :\n",[
      "    ________        ",
      "---'   _ ,  |       ",
      "      (__(__)       ",
      "      (_____)       ",
      "      (____)        ",
      "---.__(___)         ",
    ]);
  }
  else if (playerTwoBufferValue === "Paper"){
    console.log("Player two play :\n",[
      "      _______       ",
      "----'    ____)____  ",
      "            _______)",
      "            _______)",
      "           _______) ",
      "----.__________)    ",
    ]);
  }
  else if (playerTwoBufferValue === "Scissors"){
    console.log ("Player two play :\n",[
      "    ____           ",
      "---'    |________  ",
      "     (__)________) ",
      "        _________) ",
      "      (____)       ",
      "---.__(___)        ",
    ]);}
};



ChoiseGameStyle();
