'''
❓ PROMPT
Given a square matrix *mat*, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements
on the secondary diagonal *that are not part of the primary diagonal*.

Example(s)
Input:
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Element mat[1][1] = 5 is counted only once.

Input:
[[1,1,1,1],
 [1,1,1,1],
 [1,1,1,1],
 [1,1,1,1]]
Output: 8

Input: [[5]]
Output: 5
 

🔎 EXPLORE
List your assumptions & discoveries:
 
Really not sure how to do this one. Do I just have a pointer to the specific index in the rows. Each iteration I add one.
I could then have a seperate pointer for the rows that increments each time.

That would do well when we are summing the first diagonal.

We could repeat this process for the other diagonal. This would have the problem of, in an odd numbered square matrix, summing
the center twice.

So how could we prevent that? 

What if we instead had two pointers and iterated through the matrix.
At each row, we add the elements that live at the index our pointers point to to our sum provided that they aren't equal.
Then, before we move to the next loop we subtract 1 from one pointer and add 1 to the other.

This will be a problem in the case that the matrix is only a single element. But perhaps we can handle that case up front.

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function diagonalSum(matrix) {
'''

def diagonalSum(matrix: list[list[int]]) -> int:
    if (len(matrix) == 1): 
        print(matrix[0][0])
        return matrix[0][0]
    
    sum = 0
    leftDiagonalPointer = 0
    rightDiagonalPointer = len(matrix) - 1
    
    for row in matrix:
        if leftDiagonalPointer == rightDiagonalPointer:
            sum += row[leftDiagonalPointer]
        else:
            sum += row[leftDiagonalPointer]
            sum += row[rightDiagonalPointer]
         
        leftDiagonalPointer += 1
        rightDiagonalPointer -= 1
        
    print(sum)
    return sum  
 

'''
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

diagonalSum([[1,2,3], [4,5,6], [7,8,9]])
diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]])
diagonalSum([[5]])