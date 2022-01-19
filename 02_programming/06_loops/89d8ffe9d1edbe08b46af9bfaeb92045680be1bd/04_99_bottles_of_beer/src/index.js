function sing () {
  // code here
  let beer = 99;
  const alcohol = [];
  while (beer > 0) {
    alcohol.push(`${beer} bottles of beer on the wall, ${beer} bottles of beer.`);
    beer = beer - 1;
    if (beer === 1) {

      alcohol.push(`Take one down and pass it around, ${beer} bottle of beer on the wall.`);
      alcohol.push("1 bottle of beer on the wall, 1 bottle of beer.");
      alcohol.push("Take one down and pass it around, no more bottles of beer on the wall.");
      alcohol.push("No more bottles of beer on the wall, no more bottles of beer.");
      alcohol.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
      return alcohol;
    }
    else{
      alcohol.push(`Take one down and pass it around, ${beer} bottles of beer on the wall.`);
    }
  }
  console.log(alcohol);
  return alcohol;
}
sing();
// Do not remove the following line, it is for tests
module.exports = sing;
