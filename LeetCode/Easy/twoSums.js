//Double Loop - O(n^2)
const twoSums = (nums, target) => {
  for (let i=0; i < nums.length; i++) {
    for (let j=i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i,j];
      }
    }
  }
}

//A few test problems
// console.log(twoSums([2, 7, 11, 15], 9));
// console.log(twoSums([10, 5, 10, 15, 17, 3, 14, 4, 9],20));

//Using a Hash Map
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
}

//A few test problems
console.log(twoSumsHash([2, 7, 11, 15], 9));
console.log(twoSumsHash([10, 5, 10, 15, 17, 3, 14, 4, 9], 20))