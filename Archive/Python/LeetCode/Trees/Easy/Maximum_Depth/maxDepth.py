#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTreeNode, BinaryTree

# Given the root of a binary tree, return its maximum depth.
# A binary tree's maximum depth is the number of nodes along the longest
# path from the root node down to the farthest leaf node.

# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: 3

# Example 2:
# Input: root = [1,null,2]
# Output: 2
 
# Constraints:
# The number of nodes in the tree is in the range [0, 104].
# -100 <= Node.val <= 100

def maxDepth(self):
  return self.maxDepth(self.root)

def findMaxDepth(self, root):
  if (not root):
    return 0
  
  left = self.findMaxDepth(root.left)
  right = self.findMaxDepth(root.right)

  return max(left, right) + 1

BinaryTree.maxDepth = maxDepth
BinaryTree.findMaxDepth = findMaxDepth

#Added to Binary_Tree Class after completed the exercise.