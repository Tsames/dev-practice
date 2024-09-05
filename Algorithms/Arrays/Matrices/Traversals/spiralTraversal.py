'''
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
'''

def spiralTraversal(matrix):
    res = []
    top, bottom = 0, len(matrix)
    left, right = 0, len(matrix[0])
    
    while top < bottom and left < right:
        # Iterate through the first row
        for index in range(left, right):
            res.append(matrix[top][index])
        top += 1
        
        # Iterate through the right side
        for index in range(top, bottom):
            res.append(matrix[index][right - 1])
        right -= 1
        
        if not top < bottom and left < right:
            break
        
        # Iterate through the bottom side
        for index in reversed(range(left, right)):
            res.append(matrix[bottom - 1][index])
        bottom -= 1
        
        # Iterate through the left side
        for index in reversed(range(top, bottom)):
            res.append(matrix[index][left])
        left += 1
    
    return res

print(spiralTraversal([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
print(spiralTraversal([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))