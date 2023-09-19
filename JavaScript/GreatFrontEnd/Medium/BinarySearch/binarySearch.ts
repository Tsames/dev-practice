export default function binarySearch(arr: Array<number>, target: number) {

}

[1,2,3,4,5,6,7,8,9,10]
[6,7]

//Recursive Engine
function search(arr: Array<number>, target: number, lastIndex: number = 0) {
  const middleIndex = findMiddle(0, arr.length);

  if (arr.length === 1 && arr[0] != target) {
    return -1
  } else if (arr[middleIndex] === target) {
    return middleIndex + lastIndex
  } else if (arr[middleIndex] < target) {
    const topSubArray = arr.slice(middleIndex + 1, arr.length)
    return search(topSubArray, target, middleIndex + lastIndex)
  } else {
    const bottomSubArray = arr.slice(0, middleIndex)
    return search(bottomSubArray, target)
  }
}

//Helper Function
const findMiddle = (first: number, last: number) => {
  return Math.floor(Math.abs(last - first)/2)
}