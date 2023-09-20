// Implement a function that performs a heap sort.
// The function should take in an array of integers and return an array with the integers sorted in ascending order.
// The input array is modified in -place.

export default function sort(arr: Array<number>) {

  //
  const size = arr.length;

  //To get the right child in a heap you multiply the parent index (j) by 2 and add one. 2(j) + 1
  //So we iterate from the last parent node by taking the size (aka the index of the last child node) and reversing the operation to get the right child.
  for (let i = Math.floor(size/2 - 1); i >= 0; i--) {
    heapify(arr, size, i)
  }
}

function heapify(arr: Array<number>, size: number, parentIdx: number) {

  //Helper Variable initialized to parent's index
  let largest = parentIdx;

  //Calculate the left child's index in a heap by doing 2(i)
  let left = 2 * parentIdx
  //Calculate the right child's index in a heap by doing 2(i) + 1
  let right = 2 * parentIdx + 1

  //Check if left child exists & if its value is greater than the parent's
  if (left < size && arr[left] > arr[largest]) {
    largest = left
  }

  //Check if right child exists & if its value is greater than either the parent's or the left child's
  if (right < size && arr[right] > arr[largest]) {
    largest = right
  }

  //If largest is not the current parent
  if (largest !== parentIdx ) {
    //Swap values with the the current parent.
    [arr[largest], arr[parentIdx]] = [arr[parentIdx], arr[largest]]

    //Recursively heapify the remaining subtree
    heapify(arr, size, largest)
  }
}