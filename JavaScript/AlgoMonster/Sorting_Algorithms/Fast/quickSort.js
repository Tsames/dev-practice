/* Quick Sort has time complexity O(n log(n)) */

function quickSort(unsortedArray, start = 0, end = unsortedArray.length) {
  if (end - start <= 1) return;

  const pivot = unsortedArray[end - 1];
  let startPtr = start, endPtr = end - 1;

  while (startPtr < endPtr) {
    //As long as start pointer is less than pivot increment start pointer
    while (unsortedArray[startPtr] < pivot && startPtr < endPtr) {
      startPtr++;
    }
    //As long as end pointer is greater than or equal to pivot decrement end pointer
    while (unsortedArray[endPtr] >= pivot && startPtr < endPtr) {
      endPtr--;
    }
    //Stop if start pointer is equal to end pointer
    if (startPtr == endPtr) break;

    //If none of the above occur then start pointer > end pointer, so swap
    const temp = unsortedArray[endPtr];
    unsortedArray[endPtr] = unsortedArray[startPtr];
    unsortedArray[startPtr] = temp;
  }
  //Now Swap the pivot with the start pointer which is also equal to the end pointer.
  const temp = unsortedArray[startPtr];
  unsortedArray[startPtr] = unsortedArray[end - 1];
  unsortedArray[end - 1] = temp;

  quickSort(unsortedArray, start, startPtr);
  quickSort(unsortedArray, startPtr + 1, end);
}


//Tests

//Expected Result - [1, 2, 36, 89, 128, 201]
const testA = [89, 2, 201, 1, 36, 128];
quickSort(testA);
console.log(testA);
//Expected Result - [3, 4, 7, 14, 36, 36, 89, 201]
const testB = [36, 14, 7, 4, 36, 89, 3, 201];
quickSort(testB);
console.log(testB);