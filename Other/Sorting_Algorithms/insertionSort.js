//Insertion Sort Algorithm -- O(n^2) / Stable / In-place Algorithm
function insertionSort(arry) {
  let value;
  let temp;

  for (let i = 0; i < arry.length; i++) {

    value = arry[i];

    //Loop through all indexes that come before i so long as the element is larger than the value
    for (let j = i - 1; j > -1 && arry[j] > value; j--) {
      temp = arry[j];
      arry[j] = arry[j+1];
      arry[j+1] = temp;
    }
  }
  return arry
}

//Another Implementation of Insertion Sort
const insertionSortTwo = (arry) => {
  for(let i=0; i < arry.length; i++) {
    while (i > 0 && arry[i] < arry[i-1]) {
      const temp = arry[i];
      arry[i] = arry[i-1];
      arry[i-1] = temp;
      i--
    }
  }
  return arry;
}

//Tests

//Expected Output - [3,6,7,8,12,13]
console.log(insertionSort([12, 6, 3, 7, 13, 8]));
console.log(insertionSortTwo([12, 6, 3, 7, 13, 8]));
//Expected Output - [-3, -1, 5, 100]
console.log(insertionSort([-3, -1, 5, 100]));
console.log(insertionSortTwo([-3, -1, 5, 100]));

//The big O time complexity for insertion sort is O(n * (n-1)/2)
 //which falls under the n^2 family.