
const findElementWithDuplicates = (sortedArray, target) => {

  //Declare helper variables
  let leftPtr = 0, rightPtr = sortedArray.length - 1, mid = 0;

  //Log Initial Variables
  console.log(`left-pointer is at ${sortedArray[leftPtr]} (I${leftPtr}). right-pointer is at ${sortedArray[rightPtr]} (I${rightPtr}).`);

  //While Loop
  while (leftPtr <= rightPtr) {

    //Calculate and log mid
    mid = leftPtr + Math.trunc((rightPtr - leftPtr) / 2)
    console.log(`mid index is ${mid}, element at mid is ${sortedArray[mid]}`);

    //If we find the target at the left boundary then we know we found the first occurence or target.
    if (sortedArray[leftPtr] == target) {
      console.log(`found the first occurence of target at ${leftPtr}`);
      return leftPtr;

    //If we find an element equal to target we move right pointer to mid (including mid) since it may not be the first occurence of target.
    } else if (sortedArray[mid] == target) {
      rightPtr = mid;
      console.log(`found an occurence of target. moving right-pointer to (I${mid})`);
      console.log(`left-pointer is at ${sortedArray[leftPtr]} (I${leftPtr}). right-pointer is at ${sortedArray[rightPtr]} (I${rightPtr}).`);

    //If we find an element strictly greater than the target then we move the right pointer up to the element before mid.
    } else if (sortedArray[mid] > target) {
      rightPtr = mid - 1;
      console.log(`moving right-pointer to (I${mid - 1})`);
      console.log(`left-pointer is at ${sortedArray[leftPtr]} (I${leftPtr}). right-pointer is at ${sortedArray[rightPtr]} (I${rightPtr}).`);
    
    //If we find an element strictly smaller than the target then we move the left pointer up to the element after mid.
    } else if (sortedArray[mid] < target) {
      leftPtr = mid + 1;
      console.log(`moving left-pointer to (I${mid + 1})`);
      console.log(`left-pointer is at ${sortedArray[leftPtr]} (I${leftPtr}). right-pointer is at ${sortedArray[rightPtr]} (I${rightPtr}).`);
    }
  }
  //If we finish our loop, we didn't find the target.
  console.log(`could not find ${target} in ${sortedArray}.`);
  return -1
}

//Tests

//Expected Output - 3
console.log(findElementWithDuplicates([1, 3, 5, 7, 9, 11], 7));
//Expected Output - 1
console.log(findElementWithDuplicates([1, 7, 8, 36], 7));
//Expected Output - -1
console.log(findElementWithDuplicates([8, 9, 10, 11, 12], 7));
//Expected Output - -1
console.log(findElementWithDuplicates([1, 2, 2, 2, 5], 2));