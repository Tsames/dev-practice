'''
https://neetcode.io/problems/depth-of-binary-tree

Depth of Binary Tree
Given the root of a binary tree, return its depth.

The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [1,2,3,null,null,4]
Output: 3

Example 2:
Input: root = []
Output: 0

Constraints:
0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100
'''

from typing import Optional
import binary_tree
from collections import deque

class Solution:
    def maxDepth(self, root: Optional[binary_tree.TreeNode]) -> int:
        if not root: return 0
        count = 0
        q = deque([root])
        
        while q:
            for i in range(len(q)):
                curr = q.popleft() 
                if curr.left: q.append(curr.left)
                if curr.right: q.append(curr.right)
            count += 1
        
        return count
    
solution = Solution()
tree = binary_tree.createFromList([1,2,3,None,None])

        