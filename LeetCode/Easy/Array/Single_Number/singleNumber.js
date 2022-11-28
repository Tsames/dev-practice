/* Description:

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. */

/* Thoughts:

There are a number of ways to do this problem if the constraints were a bit different.
Because the given array is not sorted AND we are required to provide a solution that only uses linear runtime complexity
and constant space complexity we cannot use the naive approach, use a hash map, sort and then find the single element.
Instead we have to use the unique properties of the bitwise exclusive or operator.

Since the bitwise exclusive or only renders a 1 in a given bit if only one of the operands has a 1 in that bit and will instead
render a 0 if both operands have a 1 in said bit, any number that has bitwise exclusive or used on it and itself will result in zero.

In addition, any number that has bitwise exclusive or used on it and the number zero will result in that number because every bitwise comparison
where there is a 1 from the non-zero number will be a 1 and a 0.

Thus, since every non unqiue number in this problem only appears twice and we are trying to find the number that only occurs once,
we can string together bitwise XOR of all the numbers and it will give us the number we are looking for. */

function findSingleNumber(nums) {
    //Edge Case
    if (nums.length === 1) {
        return nums[0];
    }

    //Helper Variable
    let output = 0;

    //Iterate through Array
    for (let i=0; i < nums.length; i++) {
        output = output ^ nums[i];
    }

    return output;

}

module.exports = findSingleNumber