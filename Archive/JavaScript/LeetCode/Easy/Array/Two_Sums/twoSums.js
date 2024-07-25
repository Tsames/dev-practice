/* Description:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/


/* First Solution - The Bad Solution - Double Loop - O(n^2)

const twoSums = (nums, target) => {
  for (let i=0; i < nums.length; i++) {
    for (let j=i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i,j];
      }
    }
  }
}*/

/* Second Solution - Using a Hash Map

const twoSumsHash = (nums, target) => {
  //Create a Hash Map
  let hash={};

  //Loop through entire nums array
  for(let i=0; i < nums.length; i++) {

    //Calculate the number needed to get to target
    const j = target - nums[i];

    //Look for that number as the key in the hash map -- if found return the index value for the number key
    if(typeof(hash[j]) !== 'undefined'){
      return [hash[j], i];
    }

    //If we don't find the number as a key in our hash add the number at index i into the hash as a key and the index as its value
    hash[nums[i]] = i;
    // console.log(`Iterated through ${i}. Hash map now looks like this:`);
    // console.log(hash);

  }

  //If we get through the entire loop without returning then there are no pairs, so return an empty array
  return []
} */


/* Third Solution - Using Two Pointers (Assuming the Given Array is Sorted) */

const twoSumsPointers = (nums, target) => {
  let pointerA = 0;
  let pointerB = nums.length - 1;

  while(pointerA < pointerB) {
    if (nums[pointerA] + nums[pointerB] === target) {
      return [pointerA, pointerB];
    } else if (nums[pointerA] + nums[pointerB] < target) {
      pointerA ++;
    } else if (nums[pointerA] + nums[pointerB] > target) {
      pointerB --;
    }
  }

  //If we've exited the loop then there is no two numbers that add to the target, so return an empty array
  return []
}

console.log(twoSumsPointers([3,2,4], 6));

module.exports = twoSumsPointers