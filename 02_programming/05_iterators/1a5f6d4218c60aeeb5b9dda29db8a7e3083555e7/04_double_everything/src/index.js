const numbers = [1, 2, 3, -6];

function double(numbers) {
//  console.log(numbers);
  return numbers * 2;
}

numbers.map(double);
//console.log(numbers.map(double));
// Do not remove the following line, it is for tests
module.exports = double;
