export default function binarySearch(arr: Array<number>, target: number) {
  return search(arr, target, 0, arr.length - 1)
}

//Recursive Engine
function search(arr: Array<number>, target: number, lowerBound:number, upperBound:number) {

  console.log(`Iterating at lowerbound = ${lowerBound} and upperbound = ${upperBound}`);

  if (lowerBound > upperBound) {
    return -1
  }

  const middleIndex = findMiddle(lowerBound, upperBound);
  console.log(`New middle index is ${middleIndex}`)

  if (arr[middleIndex] === target) {
    console.log(`Found target @ ${middleIndex}`)
    return middleIndex
  }
  
 if (arr[middleIndex] < target) {
    console.log(`${target} is greater than ${arr[middleIndex]}.`)
    return search(arr, target, middleIndex + 1, upperBound)
  } else {
   console.log(`${target} is less than ${arr[middleIndex]}.`)
    return search(arr, target, lowerBound, middleIndex - 1)
  }
}

//Helper Function
const findMiddle = (first: number, last: number) => {
  return Math.round(Math.abs(last - first)/2) + first
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11))