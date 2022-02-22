//Bubble Sort Algorithm
function bubbleSort(arry) {
  let swap = true;
  let temp;

  while (swap) {
    //Reset swap tracker upon new iteration through Arry
    swap = false
    //Iterate through arry making swaps
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] > arry[i + 1]) {
        temp = arry[i + 1];
        arry[i + 1] = arry[i];
        arry[i] = temp;
        swap = true;
      }
    }
  }
  return arry
}

//Tests

//Expected Output - [3,6,7,8,12,13]
console.log(bubbleSort([12, 6, 3, 7, 13, 8]));
//Expected Output - [-3, -1, 5, 100]
console.log(bubbleSort([-3, -1, 5, 100]));