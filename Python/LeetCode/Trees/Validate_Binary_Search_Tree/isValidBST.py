#Import Linked List Data Structure
import sys
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
  return self.getValidBST(self.root)

def getValidBST(self, root):

  # ---%%%--- Return True if we hit None ---%%%---
  if (not root):
    # print("Hit None, returning true.")
    return True
  
  # print(f"Iterating at {root.value}...")
  
  #  ---%%%--- Return False if the left child is greater than the root ---%%%---
  if (root.left and root.left.value > root.value):
    # print(f"{root.left.value} is greater than {root.value}. Returning false.")
    return False

  if (root.right and root.right.value <= root.value):
    # print(f"{root.right.value} is less than {root.value}. Returning false.")
    return False
  
  result = self.getValidBST(root.left) and self.getValidBST(root.right)
  # print(f"Returning {result} up the recursion stack.")
  return result

testTree = BinaryTree([10,5,15,6,8,13,18])
print(testTree)
BinaryTree.isValidBST = isValidBST
BinaryTree.getValidBST = getValidBST
print(testTree.isValidBST())