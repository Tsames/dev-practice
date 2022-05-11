/* Merge Sort has time complexity O(n log(n)) */

//Helper Sorting Function
function merge(arrayA, arrayB) {
  let arrayC = [];

  //While both arrays have elements
  while (arrayA.length != 0 && arrayB.length != 0) {
    if (arrayA[0] >= arrayB[0]) {
      arrayC.push(arrayB[0]);
      arrayB.shift()
    } else {
      arrayC.push(arrayA[0]);
      arrayA.shift()
    }
  }

  //Now one of the arrays no longer has elements.
  //Iterate over the remaining non-empty array.

  while (arrayA.length != 0) {
    arrayC.push(arrayA[0]);
    arrayA.shift()
  }

  while (arrayB.length != 0) {
    arrayC.push(arrayB[0]);
    arrayB.shift()
  }

  //Return our sorted combined array
  return arrayC
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  let n = arr.length

  let arrayA = mergeSort(arr.slice(0, n / 2));
  let arrayB = mergeSort(arr.slice(n / 2, n));

  return merge(arrayA, arrayB);
}

//Tests
//Expected Result - [1, 2, 36, 89, 128, 201]
console.log(mergeSort([128, 1, 36, 201, 2, 89]))
//Expected Result - [1, 1, 1, 2, 36, 89, 128, 201]
console.log(mergeSort([128, 1, 36, 201, 1, 2, 89, 1]))