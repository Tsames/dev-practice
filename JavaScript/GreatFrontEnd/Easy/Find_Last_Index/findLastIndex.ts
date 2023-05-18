/*

Implement a function findIndex(array, predicate, [fromIndex=array.length-1]) that
takes an array of values, a function predicate, and an optional fromIndex number argument,
and returns the index of the last element in the array that satisfies the provided testing
function predicate. It iterates over elements of the array from right to left.

Arguments
array (Array): The array to inspect.
predicate (Function): The function invoked per iteration.
[fromIndex=array.length-1] (number): The index to search from.
Returns
(number): Returns the index of the found element, else -1.

Note: Your function should handle negative indices. If the index is out of range, start searching from the closest index that is within the range.

Examples
const arr = [5, 4, 3, 2, 1];

Search for the last number in the array that is greater than 3
findLastIndex(arr, (num) => num > 3); // => 1

Start searching from index 3 (inclusive)
findLastIndex(arr, (num) => num > 1, 3); // => 3

Start searching from index 3 (inclusive)
findLastIndex(arr, (num) => num < 1, 3); // => -1


Edge cases
Your function needs to handle negative fromIndex.

If index > array.length, start from the last index. Also, if index < - array.length, start searching from index 0.

const arr = [5, 4, 3, 2, 1];
findLastIndex(arr, (num) => num > 2, -3); // => 2

Start from the last index
findLastIndex(arr, (num) => num > 0, 10); // => 4

Start from 0 if fromIndex < -(array.length)
findLastIndex(arr, (num) => num > 2, -10); // => -1 */

function findLastIndex(array: Array<any>, predicate: (value: any, index: number, array: Array<any>) => boolean, fromIndex = array.length - 1): number{

  if (fromIndex > array.length - 1) {
    fromIndex = array.length - 1
  } else if (fromIndex < 0) {
    fromIndex = 0
  }

  

  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i
    }
  }

  return -1
}

const testPredicate = (value, index, array) => {
  if (value * (index + 1) > array.length * 2) {
    return true
  }
}

console.log(findLastIndex([5,6,3,2,1], testPredicate))