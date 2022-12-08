/* 

Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must appear as many times as it shows in both arrays
and you may return the result in any order. 

*/

const arrayIntersection = (nums1, nums2) => {

  //Create a has and an output array
  const hash = {};
  const output = []

  //Iterate through Array One
  for (let i = 0; i < nums1.length; i++) {

    //If a value doesn't exist in the hash, add it.
    if (!hash[nums1[i]]) {
      hash[nums1[i]] = 1;
      //Else if it does, add one to the value
    } else {
      hash[nums1[i]] = hash[nums1[i]] + 1;
    }

  }

  //Now Iterate through the second array.
  for (let j=0; j < nums2.length; j++) {

    /* Check and see it each value exists as a key in the hash,
    if it does add it to the output array and decrement the value by one */
    if (hash[nums2[j]] && hash[nums2[j]] >= 1) { 

      output.push(nums2[j]);
      hash[nums2[j]] = hash[nums2[j]] - 1;

    }

  }

  return output;

}

console.log(arrayIntersection([1, 2, 3, 4, 5], [2, 3, 4, 5, 5]));



module.exports = arrayIntersection