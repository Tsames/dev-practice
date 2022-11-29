//INSTRUCTIONS
//You are going to be given a word. Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

//Examples
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

//SOLUTION Initial

// const getMiddle = word => {
//   if (word.length < 3) {
//     return word
//   } else {
//     return getMiddle(word.slice(1,-1));
//   }
// }

//SOLUTION Revised

const getMiddle = word => {
  return (word.length < 3? word : getMiddle(word.slice(1,-1)))
}

//TESTS

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("A"));
console.log(getMiddle("ttttttAtttttt"))