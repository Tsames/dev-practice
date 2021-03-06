// //Insertion Sort Algorithm -- O(n^2) / Stable / In-place Algorithm
// function insertionSort(arry) {
//   let value;
//   let temp;

//   for (let i = 0; i < arry.length; i++) {

//     value = arry[i];

//     //Loop through all indexes that come before i so long as the element is larger than the value
//     for (let j = i - 1; j > -1 && arry[j] > value; j--) {
//       temp = arry[j];
//       arry[j] = arry[j+1];
//       arry[j+1] = temp;
//     }
//   }
//   return arry
// }

// //Another Implementation of Insertion Sort
// const insertionSortTwo = (arry) => {
//   for(let i=0; i < arry.length; i++) {
//     while (i > 0 && arry[i] < arry[i-1]) {
//       const temp = arry[i];
//       arry[i] = arry[i-1];
//       arry[i-1] = temp;
//       i--
//     }
//   }
//   return arry;
// }

//Rewrite InsertionSort
function insertionSort(unsortedArray) {
  for (let i = 0; i < unsortedArray.length; i++) {
    while (i > 0 && unsortedArray[i] < unsortedArray[i-1]) {
      const temp = unsortedArray[i];
      unsortedArray[i] = unsortedArray[i-1];
      unsortedArray[i-1] = temp;
      i--
    }
  }
  return unsortedArray
}

//Tests

//Expected Output - [3,6,7,8,12,13]
console.log(insertionSort([12, 6, 3, 7, 13, 8]));
//Expected Output - [-3, -1, 5, 100]
console.log(insertionSort([-3, -1, 5, 100]));