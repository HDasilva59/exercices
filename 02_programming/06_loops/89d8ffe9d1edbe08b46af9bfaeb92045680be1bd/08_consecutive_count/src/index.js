function consecutiveCount(string, letterOccurence, minOccur = 1) {
  const howManyTimes = string.split(`${letterOccurence.repeat(minOccur)}`).length - 1;
  if (howManyTimes === 0) {
    return minOccur - 1;
  } else {
    return consecutiveCount(string, letterOccurence, minOccur + 1);
  }
}

consecutiveCount("J'aime les chats", "a");

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
