/* Description:

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. 

*/

/* First Thoughts: Since the array is sorted in increasing order, we can loop through the array and compare an given element
to the next element. If there is a duplicate it will be right next to the element.

function removeDuplicates(arrayNums) {
    for (let i = 0; i < arrayNums.length - 1; i++) {
        if (arrayNums[i] = arrayNums[i + 1]) {
            console.log(`Found a duplicate ${arrayNums[i+1]} at index ${i + 1}.`);
        }
    }
}

removeDuplicates([1,1,1,2,3,4,4,5,6,7,8,9,9,10]); */


function removeDuplicates(nums) {

    let lastElement = null;

    //Replace all duplicate values with null
    for (let i = 0; i < nums.length; i++) {
        //Replace a duplicate found with null
        if (nums[i] === lastElement) {

            console.log(`Found a duplicate ${nums[i]} at index ${i}.`);

            nums[i] = null;
        
        //Set new lastElement if no null & element at current index doesn't match
        } else if (nums[i] !== null) {

            lastElement = nums[i];

        }
    }

    //Sort our new array such that nulls are at the end of the array
    //(insertion sort like method of sorting)
    for (let j = nums.length - 2; j > 0; j--) {
        if (nums[j] === null) {
            let k = j;
            while (k < nums.length - 1 && nums[k + 1] !== null) {
                nums[k] = nums[k + 1];
                nums[k + 1] = null;
                k++
            }
        }
    }
    
    return nums;
}

console.log(removeDuplicates([1,1,2,3,4,5,5,6,7,8,8]));


module.exports = removeDuplicates