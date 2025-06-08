// // ### Question 6: Text Processing

// ```jsx
const words = [
  "javascript",
  "aadil",
  "array",
  "method of array",
  "function",
  "variable",
  "object",
  "string",
];

// ```

// a) Find the longest word

const longestWord = words.reduce((acu, cur) => {
  return acu.length > cur.length ? acu : cur;
});

console.log(longestWord);

// b) Calculate the total number of characters across all words

const totalLength = words.reduce((acu, item) => {
  return acu + item.length;
}, 0);
console.log(totalLength);

const totalNumberOfCharacters = words.join("").trim().length; // cant work
console.log(totalNumberOfCharacters);
const totalNumberOfWords = words.reduce((acu, cur) => {
  return acu + cur.length;
}, 0);
console.log(totalNumberOfWords);
// c) Count how many words contain the letter 'a'

const wordsContainA = words.reduce((acu, cur) => {
  return acu + cur.includes("a");
}, 0);
const wordsContainA2 = words.filter((word) => word.includes("a")).length;

console.log(wordsContainA);
console.log(wordsContainA2);

// d) Create a single string with all words joined by commas

const singleString = words.join(",");
console.log(singleString);
// e) Find the word that comes first alphabetically

const firstAlpha = words.reduce((a, b) => (a.localeCompare(b) < 0 ? a : b));
console.log(firstAlpha);
// const wordsFirstAlpha = words.sort()[0];

const firstString = words.sort((a, b) => {
  return a.localeCompare(b) - b.localeCompare(a);
});
console.log(firstString[0]);

// console.log(wordsSort);
// console.log(wordsFirstAlpha);
