"""
https://neetcode.io/problems/binary-tree-diameter

Diameter of Binary Tree
The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

The length of a path between two nodes in a binary tree is the number of edges between the nodes.

Given the root of a binary tree root, return the diameter of the tree.

Example 1:
Input: root = [1,null,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].

Example 2:
Input: root = [1,2,3]
Output: 2

Constraints:
1 <= number of nodes in the tree <= 100
-100 <= Node.val <= 100
"""

from binary_tree import TreeNode, createFromList
from typing import Optional


class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        """
        We want to use dfs here to get the the deepest depth of each sub tree.
        
        In a generic case we might calculate the max depth of the left and right subtree of our root node.
        In which case, we add them together at the end to get our diameter.
        However, there may be a case where the dimaeter is contained entirely to the left of right subtree.
        
        If we were to use dfs to return the depth of a path for a given node, we could have a variable that contains the greatest path length encountered so far.
        
        At each node we could compare the sum of its left and right subtree. If its greater save it to the varaible and return the length of the longer subtree.
        
        Then finally at the end we could return the variable
        """
        
        self.res = 0
    
        def dfs(root: Optional[TreeNode]) -> int:
            if not root:
                return 0
            
            left = dfs(root.left)
            right = dfs(root.right)
            
            self.res = max(self.res, left + right)
            return 1 + max(left, right)
    
        dfs(root)
        return self.res

        
solution = Solution()
testOne = createFromList([1,None,2,3])
print(solution.diameterOfBinaryTree(testOne))

testTwo = createFromList([1,None,2,3,4,5])
print(solution.diameterOfBinaryTree(testTwo))
