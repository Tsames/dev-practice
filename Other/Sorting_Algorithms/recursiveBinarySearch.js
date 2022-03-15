//  search through the array recursively for the element
//  you may need to add some default parameters to this function!
//  if the element is not found, return -1
//  if the element is found, return the index at which it was found

function recursiveBinarySearch(arr, element, pivot = (arr.length - 1) / 2 | 0, index = (arr.length - 1) / 2 | 0) {
  //--- Base Case Check ---
  if (arr[pivot] === element) {
    return index
  } else if (arr.length === 1 && arr[0] != element) {
    return -1
  // --- Calls on Subsections of the Array ---
  //Call if element is greater than pivot
  } else if (arr[pivot] < element) {
    newArr = arr.slice(pivot + 1, arr.length)
    console.log(`Element (${element}) is bigger than pivot (${arr[pivot]}) in ${arr}. The new array is ${newArr}.`);
    pivot = (newArr.length - 1) / 2 | 0;
    index += pivot + 1
    console.log(`Making another call with pivot (${newArr[pivot]}) and index (${index})`)
    return recursiveBinarySearch(newArr, element, pivot, index)
  } else {
    //Call if element is less than pivot
    newArr = arr.slice(0, pivot);
    console.log(`Element (${element}) is smaller than pivot (${arr[pivot]}) in ${arr}. The new array is ${newArr}.`);
    pivot = (newArr.length - 1) / 2 | 0;
    index -= (newArr.length) - pivot
    console.log(`Making another call with pivot (${newArr[pivot]}) and index (${index})`)
    return recursiveBinarySearch(newArr, element, pivot, index)
  }
}

//Example where the Element is in the first position || Expected Output - 0
console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
//Example where the Element is in position lower subsection || Expected Output - 3
console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
//Example where the Element is in the upper subsection || Expected Output - 7
console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7))
//Example where the Element is in the last position || Expected Output - 9
console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9))