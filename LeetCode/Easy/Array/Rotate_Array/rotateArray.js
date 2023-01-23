/* Given an array, rotate the array to the right by k steps, where k is non-negative. */


//Solution with constant extra space
function rotateArray(nums, k) {

  const output = [];

  for (let i = 0; i < nums.length; i++) {

    output.push(nums[(nums.length - (k) + i) % nums.length]);

  }

  return output;
}

//Solution without extra space
// function rotateArrayClever(nums, k) {

//   for (let i = 0; i < k; i++) {

//     let num = nums.pop();
//     nums.unshift(num);

//   }

//   return nums
// }

module.exports = rotateArray, rotateArrayClever