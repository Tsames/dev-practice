function findPeak(mountainArray) {

  //Declare helper variables
  let leftPtr = 0, rightPtr = mountainArray.length - 1, mid = 0, boundary_index = -1;

  while (leftPtr <= rightPtr) {

    //Calculate and Log Mid
    mid = leftPtr + Math.trunc((rightPtr - leftPtr) / 2);
    console.log(`mid index is ${mid}, element at mid is ${mountainArray[mid]}`);

    //If mid is greater than the next element
    if (mountainArray[mid] > mountainArray[mid + 1]) {

      boundary_index = mid;
      rightPtr = mid - 1;
      console.log(`moving right-pointer to (I${rightPtr})`);
      console.log(`left-pointer is at ${mountainArray[leftPtr]} (I${leftPtr}). right-pointer is at ${mountainArray[rightPtr]} (I${rightPtr}).`);

    } else {

      leftPtr = mid + 1;
      console.log(`moving left-pointer to (I${leftPtr})`);
      console.log(`left-pointer is at ${mountainArray[leftPtr]} (I${leftPtr}). right-pointer is at ${mountainArray[rightPtr]} (I${rightPtr}).`);

    }
  }
  return boundary_index;
}

//Tests

//Expected Output - 4
console.log(findPeak([1, 2, 3, 4, 5, 4, 3, 2, 1]));
//Expected Output - -1
console.log(findPeak([8, 9, 10, 11, 12]));