const findMinimumInRotatedArray = (rotatedArray) => {

  //Declare Helper Variables
  let leftPtr = 0, rightPtr = rotatedArray.length - 1, mid = 0, boundary_index = -1;

  while (leftPtr <= rightPtr) {

    //Calculate and Log Mid
    mid = leftPtr + Math.trunc((rightPtr - leftPtr) / 2);
    console.log(`mid index is ${mid}, element at mid is ${rotatedArray[mid]}`);

    //We are trying to find the point in the array furthest to the left that is less than or equal to the end of the array.
    if (rotatedArray[mid] <= rotatedArray[rotatedArray.length - 1]) {

      //If we find a number that is less than or equal to the end then record it and move the right pointer.
      boundary_index = mid;
      rightPtr = mid - 1;

      //Logging
      console.log(`moving right-pointer to (I${rightPtr})`);
      console.log(`left-pointer is at ${rotatedArray[leftPtr]} (I${leftPtr}). right-pointer is at ${rotatedArray[rightPtr]} (I${rightPtr}).`)
    } else {

      //Else we move the left pointer over.
      leftPtr = mid + 1;

      //Logging
      console.log(`moving left-pointer to (I${mid})`);
      console.log(`left-pointer is at ${rotatedArray[leftPtr]} (I${leftPtr}). right-pointer is at ${rotatedArray[rightPtr]} (I${rightPtr}).`);
    }
  }
  return boundary_index
}

//Tests

//Expected Output - 2
console.log(findMinimumInRotatedArray([9, 11, 1, 3, 5, 7]));
//Expected Output - 3
console.log(findMinimumInRotatedArray([36, 66, 109, 1, 7, 8, 36]));
//Expected Output - 0
console.log(findMinimumInRotatedArray([8, 9, 10, 11, 12]));