#Import Linked List Data Structure
import sys
from math import inf
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTreeNode, BinaryTree

# Given the root of a binary tree, determine if it is a valid binary search tree (BST).

# A valid BST is defined as follows:

# The left subtree of a node contains only nodes with keys less than the node's key.
# The right subtree of a node contains only nodes with keys greater than the node's key.
# Both the left and right subtrees must also be binary search trees.

# Example 1:
# Input: root = [2,1,3]
# Output: true

# Example 2:
# Input: root = [5,1,4,null,null,3,6]
# Output: false

# Explanation: The root node's value is 5 but its right child's value is 4.
 
# Constraints:
# The number of nodes in the tree is in the range [1, 104].
# -231 <= Node.val <= 231 - 1

def isValidBST(self):
  return self.getValidBST(self.root, -inf, inf)

def getValidBST(self, root, min, max):

  # ---%%%--- Return True if we hit None ---%%%---
  if (not root):
    return True
  
  #  ---%%%--- Return False if either requirement for BST is not true ---%%%---
  if ((root.left and root.left.value) and (root.left.value >= root.value or root.left.value <= min)):
    return False

  if ((root.right and root.right.value) and (root.right.value <= root.value or root.right.value >= max)):
    return False
  
  # ---%%%--- Return Recrsive call on left and right subtrees ---%%%---
  return self.getValidBST(root.left, min, root.value) and self.getValidBST(root.right, root.value, max)

BinaryTree.isValidBST = isValidBST
BinaryTree.getValidBST = getValidBST

#Added to BinaryTree class after completion of this exercise.