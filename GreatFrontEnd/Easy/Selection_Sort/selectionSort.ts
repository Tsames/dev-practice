/* 

Implement a function that performs a selection sort. The function should take in an
array of integers and return an array with the integers sorted in ascending order.

Selection Sort expected input and output

Examples

selectionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
selectionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]

Recap
Selection sort is a sorting algorithm that repeatedly scans an unsorted array and with
each iteration finds the minimum element to build up a sorted array.

Here is the basic idea behind selection sort:

Find the minimum element in the array.
Swap it with the element at the first position.
Find the second minimum element in the array.
Swap it with the element at the second position.
Continue this process until the entire array is sorted.
Selection Sort explanation

*/

export default function sort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr
}