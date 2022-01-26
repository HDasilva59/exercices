function letterCount(string, letterToFind) {
  let i = 0;
  let letterscounter = 0;
  return string.split(`${letterToFind}`).length - 1;
}
// Do not remove the following line, it is for tests
module.exports = letterCount;

//str.includes(chaîneRecherchée, position);
