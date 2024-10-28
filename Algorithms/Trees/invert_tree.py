"""
https://neetcode.io/problems/invert-a-binary-tree

Invert a Binary Tree
You are given the root of a binary tree root. Invert the binary tree and return its root.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,3,2,7,6,5,4]

Example 2:
Input: root = [3,2,1]
Output: [3,1,2]

Example 3:
Input: root = []
Output: []

Constraints:
0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100
"""

from typing import Optional
from binary_tree import BinaryTreeNode, create_tree_from_list
from collections import deque


class Solution:
    def invertTree(self, root: Optional[BinaryTreeNode]) -> Optional[BinaryTreeNode]:
        """
        Plan:

        To accomplish this we have to swap the left child with the right child for each node that has at least one child.
        We could use breadth first search to visit each node.
        At each iteration of our bfs we would make the additional operation of swapping the left child with the right child.
        """
        if not root:
            return root
        
        q = deque([root])
        while q:
            curr = q.popleft()

            temp = curr.right
            curr.right = curr.left
            curr.left = temp

            if curr.left:
                q.append(curr.left)
            if curr.right:
                q.append(curr.right)

        return root
    
    
solution = Solution()
treeOne = create_tree_from_list([1,2,3,4,5,6,7])
print(solution.invertTree(treeOne))
