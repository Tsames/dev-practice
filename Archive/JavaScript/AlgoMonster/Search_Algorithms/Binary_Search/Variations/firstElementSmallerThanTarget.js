//Finding the first element smaller than target with Binary Search O(log(n))

/* In this scenario there is an array filled with integers.
The array is sorted from smallest to largest.
Find the index of the first element that is smaller that target. 

This problem is equivalent to finding the boundary of all elements
that are larger than or equal to target. */

function binarySearchFirstSmallerThanTarget(arr, target) {

  //Set Helper Variables
  let leftPtr = 0, rightPtr = arr.length - 1, mid = 0;

  //Log Initial Variables
  console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);

  //Loop as long as the pointers don't cross
  while (leftPtr <= rightPtr) {

    //Calculate and log mid
    mid = leftPtr + Math.trunc((rightPtr - leftPtr) / 2)
    console.log(`mid index is ${mid}, element at mid is ${arr[mid]}`);

    //If we find a numer less than the target at the right pointer, then we've found the boundary so return it.
    if (arr[rightPtr] < target) {
      console.log(`found the boundary at ${rightPtr}`);
      return rightPtr;

      //If mid is on true then we can move the rightPtr to mid and log it.
    } else if (arr[mid] < target) {
      leftPtr = mid;
      console.log(`moving left-pointer to (I${mid})`);
      console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);

      //Else we found a false, so move and log leftPtr.
    } else {
      rightPtr = mid - 1;
      console.log(`moving right-pointer to (I${mid - 1})`);
      console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);
    }
  }

  //If we finish our loop, we didn't find a single true.
  console.log(`No numbers smaller than ${target} in ${arr}.`);
  return -1
}

//Tests

//Expected Output - 2
console.log(binarySearchFirstSmallerThanTarget([1,3,5,7,9,11], 7));
//Expected Output - 0
console.log(binarySearchFirstSmallerThanTarget([1,7,8,36], 7));
//Expected Output - -1
console.log(binarySearchFirstSmallerThanTarget([8,9,10,11,12], 7));
//Expected Output - 4
console.log(binarySearchFirstSmallerThanTarget([1,2,3,4,5], 7));