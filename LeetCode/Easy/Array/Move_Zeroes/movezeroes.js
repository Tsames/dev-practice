/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1  */

function moveZeroesSlow(nums) {
    //Loop through the entire array
    for (let i=1; i < nums.length; i++) {

        //If you find a zero do the following
        if (nums[i] === 0) {
            let j = i;

            /* As long as you aren't on the first index and the element
            at the previous index is not zero switch the element at the
             current index with the element at the previous index. */
            while (j > 0 && nums[j-1] !== 0) {
                const temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
                j--
            }

        }
    }

    return nums
}

module.exports = moveZeroesSlow