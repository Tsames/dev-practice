//Insertion Sort Algorithm
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

//Tests
//Expected Output - [3,6,7,8,12,13]
console.log(insertionSort([12, 6, 3, 7, 13, 8]));
//Expected Output - [-3, -1, 5, 100]
console.log(insertionSort([-3, -1, 5, 100]));
