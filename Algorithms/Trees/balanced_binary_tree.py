'''
https://neetcode.io/problems/balanced-binary-tree

Balanced Binary Tree
Given a binary tree, return true if it is height-balanced and false otherwise.

A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Input: root = [1,2,3,null,null,4]
Output: true

Example 2:
Input: root = [1,2,3,null,null,4,null,5]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 1000].
-1000 <= Node.val <= 1000
'''

from typing import Optional
from binary_tree import TreeNode, createFromList


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        
        def dfs(root) -> list[int, bool]:
            if not root:
                return [0, True]
            
            left = dfs(root.left)[0]
            right = dfs(root.right)[0]
            
            return [max(left, right) + 1, abs(left - right) <= 1]
        
        return dfs(root)[1]
            
solution = Solution()
tree = createFromList([1,2,2,3,None,None,3,4,None,None,4])
print(solution.isBalanced(tree))