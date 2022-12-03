/* Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109 */

//Brute force solution

const containsDuplicateBrute = (nums) => {
  for (let i=0; i < nums.length; i++) {
    for (let j=i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
}


//Solution with a Hash Map

const containsDuplicate = (nums) => {
  let hash = {};

  for (let i=0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      return true;
    }
    hash[nums[i]] = i;
  }

  return false;
}

//Test 1
console.log(`Testing ${[1, 2, 3, 1]}:`)
console.log(`Brute: ${containsDuplicateBrute([1, 2, 3, 1])}`);
console.log(`Hash: ${containsDuplicate([1, 2, 3, 1])}`);

//Test 2
console.log(`Testing ${[1, 2, 3, 4]}:`);
console.log(`Brute: ${containsDuplicateBrute([1, 2, 3, 4])}`);
console.log(`Hash: ${containsDuplicate([1, 2, 3, 4])}`);

//Test 3
console.log(`Testing ${[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]}:`)
console.log(`Brute: ${containsDuplicateBrute([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])}`);
console.log(`Hash: ${containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])}`);