//Build a recursive function that returns the largest number in a given array.

function findMax(arr, idx = 0, max = undefined) {
  if (idx === arr.length) {
    return max;
  } else if (max === undefined || arr[idx] > max) {
    max = arr[idx];
  }
  return findMax(arr, idx + 1, max)
}

//Tests
//Expected Output 4
console.log(findMax([1,3,4,2,0,-1]));
//Expected Output -1
console.log(findMax([-200,-34,-300,-29,-1]));