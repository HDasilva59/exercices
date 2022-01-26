const numbers = [1, 2, 3, -6];

function double(numbers) {
  let i = 0;
  const doublednumbers = numbers.map(n => n*2);
  return doublednumbers;
}
//console.log(numbers.map(double));
// Do not remove the following line, it is for tests
module.exports = double;
