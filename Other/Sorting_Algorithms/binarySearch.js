  //  search through the array non-recursively for the element
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found

function binarySearch(arr, element) {
  let leftSide = 0;
  let rightSide = arr.length - 1
  let pivot = (rightSide/ 2) | 0
  console.log(`left side is ${leftSide}`);
  console.log(`right side is ${rightSide}`);
  console.log(`pivot is ${pivot}`);
  while (leftSide < pivot < rightSide) {
    if (leftSide === rightSide) {
      return -1
    }
     else if (arr[pivot] === element) {
      return pivot
    } else if (arr[pivot] < element) {
      leftSide = pivot
      pivot += Math.round((rightSide - leftSide)/2)
    } else {
      rightSide = pivot;
      pivot -= Math.round((rightSide - leftSide) / 2)
    }
    console.log(`left side is ${leftSide}`);
    console.log(`right side is ${rightSide}`);
    console.log(`pivot is ${pivot}`);
  }
}

//Expected Output - 0
console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10], 0));
//Expected Output - 4
console.log(binarySearch([0,1,13,85,113,187,1191,2041], 113))