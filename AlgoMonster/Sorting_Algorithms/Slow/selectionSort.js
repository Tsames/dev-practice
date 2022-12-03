// //Selection Sort Algorithm -- O(n^2) / not Stable / In-place Algorithm
// function selectionSort(arry) {
//   for(let i = 0; i < arry.length; i++) {
//     let minIndex = i;
//     for(let j = i + 1; j < arry.length; j++){
//       if (arry[j] < arry[minIndex]) {
//         minIndex = j;
//       }
//     }
//     const temp = arry[i];
//     arry[i] = arry[minIndex];
//     arry[minIndex] = temp;
//   }
//   return arry;
// }

//Rewrite Selection Sort
function selectionSort(unsortedArray) {
  for (let i = 0; i < unsortedArray.length; i++) {
    let min = i;
    for (let j = i + 1; j < unsortedArray.length; j++) {
      if (unsortedArray[j] < unsortedArray[min]) {
        min = j;
      }
    }
    let temp = unsortedArray[i];
    unsortedArray[i] = unsortedArray[min];
    unsortedArray[min] = temp;
  }
  return unsortedArray
}

//Tests

//Expected Output - [3,6,7,8,12,13]
console.log(selectionSort([12, 6, 3, 7, 13, 8]));
//Expected Output - [-3, -1, 5, 100]
console.log(selectionSort([-3, -1, 5, 100]));