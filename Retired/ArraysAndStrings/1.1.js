//IS UNIQUE

/* Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures? */

//The Obvious solution

// const determineUnique = (string) => {
//   let visited = [];

//   for (let i=0; i < string.length; i++) {
//     for (let j=0; j < visited.length; j++) {
//       if (visited[j] === string[i]) {
//         return false;
//       }
//     }
//     if (string[i] !== " ") {
//       visited.push(string[i]);
//     }
//   }

//   return true;
// }

//Making it better - Hash Map

/*  */

const determineUniqueTwo = (string) => {
  if(string.length > 256) return false;
  let visited = new Array(256);

  for (let i=0; i < string.length; i++) {
    let visitIndex = string.charCodeAt(i);
    if (visited[visitIndex]) {
      return false;
    }
    visited[visitIndex] = true;
  }

  return true;
}

//Simple Tests
// console.log(determineUnique("this a bg one"))
// console.log(determineUnique("a"));


console.log(determineUniqueTwo("this one!"));
console.log(determineUniqueTwo("hannah"));
console.log(determineUniqueTwo("$%^()a!"));
console.log(determineUniqueTwo("a"));
console.log(determineUniqueTwo(""));