  //  search through the array non-recursively for the element
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found

function binarySearch(arr, element) {
  let leftSide = 0;
  let rightSide = arr.length - 1;
  let pivot = (rightSide/ 2) | 0;
  let result = false;

  console.log(`left side index is ${leftSide}, element at leftSide is ${arr[leftSide]}`);
  console.log(`right side index is ${rightSide}, element at rightSide is ${arr[rightSide]}`);
  console.log(`pivot index is ${pivot}, element at pivot is ${arr[pivot]}`);

  while (leftSide >= rightSide) {
    if (arr[pivot] === element) {
      result = true;
    } else if (arr[pivot] < element) {
      leftSide = pivot
      pivot += Math.round((rightSide - leftSide)/2)
    } else {
      rightSide = pivot;
      pivot -= Math.round((rightSide - leftSide) / 2)
    }
    console.log(`left side index is ${leftSide}, element at leftSide is ${arr[leftSide]}`);
    console.log(`right side index is ${rightSide}, element at rightSide is ${arr[rightSide]}`);
    console.log(`pivot index is ${pivot}, element at pivot is ${arr[pivot]}`);
  }
  
  return result
}

//Expected Output - 0
console.log(binarySearch([1,0,3,4,5], 0));
//Expected Output - 4
console.log(binarySearch([2,113], 113))