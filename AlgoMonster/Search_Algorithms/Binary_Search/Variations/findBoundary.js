//Finding the boundary with Binary Search O(log(n))

/* In this scenario there is an array filled with either false and or true elements.
The array is sorted so that all leftmost values are false and all rightmost values are true.
Find the index of the leftmost true. 

We can either solve this using a variable to keep track of the index values of the trues we 
comes accross or we can keep the current element in the range.

Lets try the former first, and the latter second. */

//Method 1 - Save index in a variable 'leftmost'
function binarySearchBoundary(arr) {

  //Set Helper Variables
  let leftPtr = 0, rightPtr = arr.length - 1, mid = 0; leftmost = -1;

  //Log Initial Variables
  console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);

  //Loop as long as the pointers don't cross
  while (leftPtr <= rightPtr) {

    //Calculate and log mid
    mid = leftPtr + Math.trunc((rightPtr - leftPtr) / 2)
    console.log(`mid index is ${mid}, element at mid is ${arr[mid]}`);

    //If we find true at the mid index then save the index, move and log rightPtr.
    if (arr[mid] === true) {
      leftmost = mid;
      rightPtr = mid - 1;
      console.log(`moving right-pointer to (I${mid - 1})`);
      console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);

      //Else we found a false, so move and log leftPtr.
    } else {
      leftPtr = mid + 1;
      console.log(`moving left-pointer to (I${mid + 1})`);
      console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);
    }
  }

  //After we finish our loop we return leftmost which will be -1 if we never found a true.
  return leftmost
}

/* ------------------------------------------------------------------------------------------- */

//Method 2 - Keep the found true in the range
function binarySearchBoundaryTwo(arr) {

  //Set Helper Variables
  let leftPtr = 0, rightPtr = arr.length - 1, mid = 0;

  //Log Initial Variables
  console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);

  //Loop as long as the pointers don't cross
  while (leftPtr <= rightPtr) {

    //Calculate and log mid
    mid = leftPtr + Math.trunc((rightPtr - leftPtr) / 2)
    console.log(`mid index is ${mid}, element at mid is ${arr[mid]}`);

    //If we find true the left pointer, then we've found the boundary so return it.
    if (arr[leftPtr] === true) {
      console.log(`found the boundary at ${leftPtr}`);
      return leftPtr;

    //If mid is on true then we can move the rightPtr to mid and log it.
    } else if (arr[mid] === true) {
      rightPtr = mid;
      console.log(`moving right-pointer to (I${mid})`);
      console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);

      //Else we found a false, so move and log leftPtr.
    } else {
      leftPtr = mid + 1;
      console.log(`moving left-pointer to (I${mid + 1})`);
      console.log(`left-pointer is at ${arr[leftPtr]} (I${leftPtr}). right-pointer is at ${arr[rightPtr]} (I${rightPtr}).`);
    }
  }

  //If we finish our loop, we didn't find a single true.
  console.log(`No true found.`);
  return -1
}


//Tests

//Method One

//Expected Output - 4
// console.log(binarySearchBoundary([false, false, false, false, true, true, true, true]));
// //Expected Output - 1
// console.log(binarySearchBoundary([false, true, true, true, true]));
// //Expected Output - -1
// console.log(binarySearchBoundary([false, false, false, false, false]));
// //Expected Output - 0
// console.log(binarySearchBoundary([true, true, true, true, true]))

//Method Two

//Expected Output - 4
console.log(binarySearchBoundaryTwo([false, false, false, false, true, true, true, true]));
//Expected Output - 1
console.log(binarySearchBoundaryTwo([false, true, true, true, true]));
//Expected Output - -1
console.log(binarySearchBoundaryTwo([false, false, false, false, false]));
//Expected Output - 0
console.log(binarySearchBoundaryTwo([true, true, true, true, true]));