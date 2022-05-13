  //Binary Search (non-recursive) O(log(n))
  
  //  search through the array non-recursively for the element
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found

function binarySearch(arr, element) {

  //Set Helper Variables
  let leftPtr = 0, rightPtr = arr.length - 1, mid = 0;

  //Log Initial Variables
  console.log(`left side index is ${leftPtr}, element at leftPtr is ${arr[leftPtr]}`);
  console.log(`right side index is ${rightPtr}, element at rightPtr is ${arr[rightPtr]}`);

  //Loop as long as the pointers don't cross
  while (leftPtr <= rightPtr) {

    //Calculate and log mid
    mid = leftPtr + Math.trunc((rightPtr - leftPtr) / 2)
    console.log(`mid index is ${mid}, element at mid is ${arr[mid]}`);

    //If we found element at mid return mid.
    if (arr[mid] === element) {
      return mid;

    //Else if the element at mid is less than our desired element shift the left pointer
    } else if (arr[mid] < element) {
      leftPtr = mid + 1;
      console.log(`left side index is ${leftPtr}, element at leftPtr is ${arr[leftPtr]}`);

    //Else the element at mid is greater than our desired element, so shift the right pointer
    } else {
      rightPtr = mid - 1;
      console.log(`right side index is ${rightPtr}, element at rightPtr is ${arr[rightPtr]}`);
    }
  }

  //If we get here it means we didn't find the element before our pointers crossed
  return -1
}


//Tests
//Expected Output - 4
console.log(binarySearch([0,1,2,3,4,5], 4));
//Expected Output - 1
console.log(binarySearch([2,113], 113))