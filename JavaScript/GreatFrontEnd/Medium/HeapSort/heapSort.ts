// Implement a function that performs a heap sort.
// The function should take in an array of integers and return an array with the integers sorted in ascending order.
// The input array is modified in -place.

function sort(arr: Array<number>) {

  //Initialize helper variable that tracks the size of the unsorted portion of our array.
  //It begins as the entire array.
  const size = arr.length;

  //Now we build our heap using our healper function heapify().

  console.log("---------------------- Building heap ----------------------")
  //To get the right child in a heap you multiply the parent index (j) by 2 and add one. 2(j) + 1
  //So we iterate from the last parent node by taking the size (aka the index of the last child node) and reversing the operation to get the right child.
  for (let i = Math.floor(size/2 - 1); i >= 0; i--) {
    heapify(arr, size, i)
  }

  console.log(arr)

  console.log("---------------------- Sorting Array using heap ----------------------")
  //Next we iterate through our constructed heap backwards
  for (let i = size - 1; i >= 0 ; i--) {
    // console.log(arr.slice(0, i + 1))

    //First we swap the max value to the end of the array, and consider that portion of the array sorted.
    // [arr[0], arr[i]] = [arr[i], arr[0]]
    const temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp

    //Then we call heapify(). Since heapify is a recursive function that will rearrange the order of our array to match the max heap data sctructure.
    // We only need to call it on the root node or index 0.
    heapify(arr, size, 0)
  }

  console.log("------------ Output --------------------")
  console.log(arr)
  return arr
}

function heapify(arr: Array<number>, size: number, parentIdx: number) {
  console.log(`Running heapify @ parentIdx: ${parentIdx}.`)
  console.log(arr.slice(0, size + 1))

  //Helper Variable initialized to parent's index
  let largest = parentIdx;

  //Calculate the left child's index in a heap by doing 2(i)
  let left = 2 * parentIdx + 1
  //Calculate the right child's index in a heap by doing 2(i) + 1
  let right = 2 * parentIdx + 2

  console.log(`arr[parentIdx] = ${arr[parentIdx]}. arr[left] = ${arr[left]}. arr[right] = ${arr[right]}.`)

  //Check if left child exists & if its value is greater than the parent's
  if (left < size && arr[left] > arr[largest]) {
    console.log(`left is bigger.`)
    largest = left
  }

  //Check if right child exists & if its value is greater than either the parent's or the left child's
  if (right < size && arr[right] > arr[largest]) {
    console.log(`right is bigger`)
    largest = right
  }

  //If largest is not the current parent
  if (largest !== parentIdx ) {
    console.log(`Swapping arr[${parentIdx}] - (${arr[parentIdx]}) with arr[${largest}] - (${arr[largest]}).`)
    //Swap values with the the current parent.
    // [arr[largest], arr[parentIdx]] = [arr[parentIdx], arr[largest]]
    const temp = arr[largest]
    arr[largest] = arr[parentIdx]
    arr[parentIdx] = temp

    //Recursively heapify the remaining subtree
    heapify(arr, size, largest)
  }
}

sort([4,3,5,1,2])