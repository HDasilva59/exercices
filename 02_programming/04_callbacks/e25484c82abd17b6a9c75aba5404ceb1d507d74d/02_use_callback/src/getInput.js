// A function getInput that takes two parameters, an input (the first one) and a callback function

// code the function here
let player;
const obj = { user: player, key: "A" };
const getInput = function getInput(player, callback) {
  callback(player.key);
};
// Leave the line below for tests to work
module.exports = getInput;
