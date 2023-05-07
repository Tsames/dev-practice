//  search through the array recursively for the element
//  you may need to add some default parameters to this function!
//  if the element is not found, return -1
//  if the element is found, return the index at which it was found


//Version that returns just true and false
function recursiveBinarySearchTrueFalse(arr, element, pivot = (arr.length - 1) / 2 | 0) {
  //--- Base Case Check ---
  if (arr[pivot] === element) {
    return true
  } else if (arr.length === 1 && arr[0] != element) {
    return false
    // --- Calls on Subsections of the Array ---
    //Call if element is greater than pivot
  } else if (arr[pivot] < element) {
    newArr = arr.slice(pivot + 1, arr.length)
    pivot = (newArr.length - 1) / 2 | 0;
    return recursiveBinarySearchTrueFalse(newArr, element, pivot)
  } else {
    //Call if element is less than pivot
    newArr = arr.slice(0, pivot);
    pivot = (newArr.length - 1) / 2 | 0;
    return recursiveBinarySearchTrueFalse(newArr, element, pivot)
  }
}

function recursiveBinarySearch(arr, element, pivot = (arr.length - 1) / 2 | 0, index = (arr.length - 1) / 2 | 0) {
  //--- Base Case Check ---
  if (arr.length === 0) {
    return -1
  } else if (arr[pivot] === element) {
    return index
  } else if (arr.length === 1 && arr[0] != element) {
    return -1
  // --- Calls on Subsections of the Array ---
  //Call if element is greater than pivot
  } else if (arr[pivot] < element) {
    newArr = arr.slice(pivot + 1, arr.length)
    pivot = (newArr.length - 1) / 2 | 0;
    index += pivot + 1
    return recursiveBinarySearch(newArr, element, pivot, index)
  } else {
    //Call if element is less than pivot
    newArr = arr.slice(0, pivot);
    pivot = (newArr.length - 1) / 2 | 0;
    index -= (newArr.length) - pivot
    return recursiveBinarySearch(newArr, element, pivot, index)
  }
}

const cleanTime = (date, add) => {
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  date.setDate(date.getDate() + add)
}

const date1 = new Date(Date.now())
cleanTime(date1, 1)
const date2 = new Date(Date.now())
cleanTime(date2, 2)
const date3 = new Date(Date.now());
cleanTime(date3, 3);

const date4 = new Date(Date.now());
cleanTime(date4, 4);

console.log(date1.getTime());
console.log(date4.getTime());

console.log(typeof(date1.getTime()));

console.log(recursiveBinarySearchTrueFalse([date1.getTime(), date2.getTime(), date3.getTime()], date4.getTime()));


//Example where the Element is in the first position || Expected Output - 0
// console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
// //Example where the Element is in position lower subsection || Expected Output - 3
// console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// //Example where the Element is in the upper subsection || Expected Output - 7
// console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7))
// //Example where the Element is in the last position || Expected Output - 9
// console.log(recursiveBinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9))