/*
'''
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104


🔎 EXPLORE
What are some other insightful & revealing test cases?

Since we know that the each row is sorted in non-decreasing order AND
the first index of each successive row is strictly greater than the last index of the previous row,
we could take an approach similar to binary search.

Instead of choosing a random index in a one-dimensional array, we could instead find the row that
the element we are looking for is in by checking the first element of the middle row.

If the target is smaller than the element at that zero index, we again look for the correct array.

Essentially Binary Search repeated twice.
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 

First find the correct array within our matrix.

First look at the zero index of the array at matrix[matrix.length / 2]
if the target is less than, set the new ceiling to be the array we just inspected.
If the target is greater than, set the new minimum to be the array we just inspected.

🛠️ IMPLEMENT
Write your algorithm. */

// My solution

function searchInSortedMatrix(matrix, target) {

    // Find the correct array
    let minArray = 0;
    let maxArray = matrix.length - 1;
    let midArray;

    while (minArray <= maxArray) {
        midArray = minArray + Math.floor((maxArray - minArray) / 2);
        if (matrix[midArray][0] > target) {
            maxArray = midArray - 1;
        } else if (matrix[midArray][matrix[0].length - 1] < target) {
            minArray = midArray + 1;
        } else {
            minArray = maxArray + 1;
        }
    }

    console.log(`Found the array within our matrix that must contain ${target}: ${matrix[midArray]}`);

    // Now Search the correct array for our target value
    min = 0;
    max = matrix[0].length - 1

    while (min <= max) {
        mid = min + Math.floor((max - min) / 2);
        console.log(`min: ${min}, max: ${max}, mid: ${mid}`);
        if (matrix[midArray][mid] == target) {
            console.log(`Found element in array ${midArray} @ index ${mid}.`);
            return true;
        } else if (matrix[midArray][mid] > target) {
            max = mid - 1;
        } else if (matrix[midArray][mid] < target) {
            min = mid + 1;
        }
    }

    console.log(`${target} doesn't exist in ${matrix}.`);
    return false;
}


 
/*
🧪 VERIFY
Run tests. Methodically debug & analyze issues.
*/

searchInSortedMatrix([[1,2,3], [4,5,6], [7,7,7], [8,9,10]], 10);

// Better Solution

// Modified binary search
function searchMatrix(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const n = rows * cols;
    let left = 0;
    let right = n - 1;
    
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const value = matrix[Math.floor(mid / cols)][mid % cols];
      if (value === target) return true;
      if (value > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return false;
  }