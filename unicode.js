let firstCodePoint = "Code".charCodeAt(0);
let thirdCodePoint = "Code".charCodeAt(2);

let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108);

let launchWord = "Launch";
let firstChar = launchWord.charCodeAt(0);
let lastChar = launchWord.charCodeAt(launchWord.length - 1);
let middleChars = launchWord.slice(1, launchWord.length - 1);

let swappedString = String.fromCharCode(lastChar) + middleChars + String.fromCharCode(firstChar);

console.log(firstCodePoint);
console.log(thirdCodePoint);
console.log(wordFromCodePoints);
console.log(swappedString);

module.exports = {
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString
};
