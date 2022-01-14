function helloSpartan(nickname = "Hello soldier; not very talkative uh?") {
  // Code the function here.
  if (nickname === "Hello soldier; not very talkative uh?") {
    console.log(nickname);
  } else if (nickname === "soldier") {
    console.log("Hello soldier; not very talkative uh?");
  } else {
    console.log(`Hello ${nickname}: glad to know your name!`);
  }
}
console.log(helloSpartan());
// Do not remove last lines, it is for tests

module.exports = helloSpartan;
