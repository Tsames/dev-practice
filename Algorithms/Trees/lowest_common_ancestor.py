"""
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

236. Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [1,2], p = 1, q = 2
Output: 1
 
Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.
"""

from typing import Optional
from binary_tree import TreeNode, createFromList


class Solution:
    def lowestCommonAncestor(
        self, root: TreeNode, p: TreeNode, q: TreeNode
    ) -> TreeNode:
        # If we find one of the nodes we are looking for return it, otherwise if we hit None, return None
        if not root or root == p or root == q:
            return root

        # Recursive Calls on our left and right subtrees
        l = self.lowestCommonAncestor(root.left, p, q)
        r = self.lowestCommonAncestor(root.right, p, q)

        """
        If both subtrees return something other than None, we know that one subtree found p
        and the other subtree found q
        that means that this node is the LCA - so return this node
        """
        if l and r:
            return root

        """ 
        Otherwise, if only one of the subtrees had a node we were looking for, return that one.
        This works because there are two scenarios.
        
        1. A node higher up in the tree has a subtree that contians the other node we are looking for.
        So we should return that we found p or q in this subtree back up the stack.
        
        2. p or q is a child of the other, and thus p or q is the LCA.
        Whenever we find p or q we immediately return that node.
        Meaning, if there is no node that contains one of each in its subtrees, that first node found
        will be the one that bubbles up the stack and is returned.
        
        
        Note that this assumption only works because we are guarnateed that p and q both exist in the tree.
        """
        return l or r
    
    def lowestCommonAncestorTwo(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root:
            return root
        
        l = self.lowestCommonAncestor(root.left, p, q)
        r = self.lowestCommonAncestor(root.right, p, q)
        
        
        
