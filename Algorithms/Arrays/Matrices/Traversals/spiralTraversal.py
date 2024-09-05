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
        
        # Iterate through the bottom side
        for index in reversed(range(left, right)):
            res.append(matrix[bottom - 1][index])
        bottom -= 1
        
        # Iterate through the left side
        for index in reversed(range(top, bottom)):
            res.append(matrix[index][left])
        left += 1
    
    return res

print(spiralTraversal([[1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20], [21,22,23,24,25,26,27,28,29,30], [31,32,33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48,49,50]]))