let i = 0;

function square(size) {
  // Code here
  while (i < size) {
    console.log("*".repeat(size));
    i = i + 1;
  }
  i = 0;
  return;
}

square(1);
// Do not remove the following line, it is for tests
module.exports = square;
