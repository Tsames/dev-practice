// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input array is empty or null, return an empty array.

function countSum (arry) {
  if (arry && arry.length) {
    //Filter negatives out of original array and use .reduce to sum
    const sum = arry.filter(value => value < 0).reduce((total, value) => total + value, 0)
    //Filter positives out and calculate length to count positives
    const count = arry.filter(value => value > 0).length
    return [count, sum]
  } else {
    return []
  }
}

//Expected Output [10,-65]
console.log(countSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
//Expected Output []
console.log(countSum([]));
//Expected Output []
console.log(countSum(null));
//Expected Output [8, -50]
console.log(countSum([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
//Expected Output [8, 0]
console.log(countSum([0, 2, 3, 0, 5, 6, 7, 8, 9, 10]));
