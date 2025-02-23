'''
https://neetcode.io/problems/subtree-of-a-binary-tree

Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [1,2,3,4,5], subRoot = [2,4,5]
Output: true

Example 2:
Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]
Output: false

Constraints:
0 <= The number of nodes in both trees <= 100.
-100 <= root.val, subRoot.val <= 100
'''

from typing import Optional
from binary_tree import TreeNode, createFromList


class Solution:
    '''
        This problem seems like the combination of two other tree problems: bfs and same tree.
        This seems close to an O(n * m) solution though where n is the size of root and m is the size of subRoot.
    ''' 
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # If root is None AND subRoot is None -> True
        # If root is NOT None AND subRoot is None -> True
        if not subRoot: return True
        
        # Now subRoot must NOT be None
        # If root is None AND subRoot is NOT None -> False
        if not root: return False
        
        if self.sameTreeDFS(root, subRoot): return True
        
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
    
    def sameTreeDFS(self, t1: Optional[TreeNode], t2: Optional[TreeNode]) -> bool:
        # If both nodes are None, they are the same
        if not t1 and not t2: return True
        
        # If both nodes exist and their values are equal, then we recursively check their children
        if t1 and t2 and t1.val == t2.val:
            return self.sameTreeDFS(t1.left, t2.left) and self.sameTreeDFS(t1.right, t2.right)
        
        # Otherwise, only one of two nodes must be NOT None OR their values must be unequal
        return False
    
solution = Solution()
print(solution.isSubtree(createFromList([1,2,3,4,5]), createFromList([2,4,5])))
print(solution.isSubtree(createFromList([1,2,3,4,5,None,None,6]), createFromList([2,4,5])))