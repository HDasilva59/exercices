function theEFilter(sentences) {
  return sentences.filter(isIncludingE);
}

function isIncludingE (sentence) {
  return sentence.toLowerCase().includes("e");
}

// Do not remove the following line, it is for tests
module.exports = theEFilter;
