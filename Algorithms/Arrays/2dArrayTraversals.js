/*
'''
❓ PROMPT
This exercise is great for building a solid understanding of working with complex data structures. 

Write functions that take a multidimensional array as input and then output a single dimensional array.
Start with the elements in increasing _row major_ order, meaning the first row from beginning to end, then
the second row, etc. Then move on to _column major_, which is the first column from beginning to end and then
the second, etc.

You can use this template to get started: */

// Row Major Traversal

function rowMajorTraversal(matrix) {
  if (matrix.length == 0) return [];
  const result = [];

  for (const row of matrix) {
    for (const value of row) {
      result.push(value);
    }
  }

  // console.log(result);
  return result;
}

rowMajorTraversal([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]);
rowMajorTraversal([]);

//Column Major Traversal

function colMajorTraversal(matrix) {
  if (matrix.length == 0) return [];
  const result = [];

  for (let rowIndex=0; rowIndex < matrix[0].length; rowIndex++) {
    for (let colIndex=0; colIndex < matrix.length; colIndex++) {
      result.push(matrix[colIndex][rowIndex]);
    }
  }

  // console.log(result);
  return result;
}

colMajorTraversal([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]);

/*
As a final challenge, do additional versions where each row is output backward but the rows are in order
and similarly for columns. There are actually 4 different variations for both row and column major, so 8 total.
Do you see why?

As you work through the variations, take note of what changes are required between variations:
- What changes between forward and backward along any dimension?
- What is the pattern in the code that differentiates row major vs column major?

/* Python Programmers*: Be sure to do at least one of these variations using both manual counting loops
(incrementing an index variable) and also using the range() construct. The range() function is great when
you already understand this thoroughly but writing some manual loops will help you build that understanding.

Example(s)
let matrix = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]
];

linearizeRowMajor(matrix) == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
linearizeColumnMajor(matrix) == [1,6,11,2,7,12,3,8,13,4,9,14,5,10,15]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function linearizeRowMajor(matrix) {
function linearizeColumnMajor(matrix) {

def linearizeRowMajor(matrix: list[list[int]]) -> list[int]:
def linearizeColumnMajor(matrix: list[list[int]]) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
