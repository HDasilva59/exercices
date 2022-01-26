// Here are some examples

let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']

function formatStorage(toFormat) {
  const formattedArray = [].concat(toFormat[0],toFormat[1], toFormat[2], toFormat[3], toFormat[4], toFormat[5]);
  console.log(formattedArray);
  return formattedArray;
}
// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
// console.log(formatStorage(storageHell));

// Don't modify this, it is for the tests.
module.exports = formatStorage;
