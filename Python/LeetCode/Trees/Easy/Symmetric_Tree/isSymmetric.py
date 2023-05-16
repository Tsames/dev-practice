#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTreeNode, BinaryTree

# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

# Example 1:

# Input: root = [1,2,2,3,4,4,3]
# Output: true

# Example 2:

# Input: root = [1,2,2,null,3,null,3]
# Output: false
 
# Constraints:

# The number of nodes in the tree is in the range [1, 1000].
# -100 <= Node.val <= 100
 
# Follow up: Could you solve it both recursively and iteratively?

def isSymmetric(self):

  if(not self.root):
    return True

  leftQueue = [self.root.left]
  rightQueue = [self.root.right]

  output = True

  while (output and (len(leftQueue) > 0 and len(rightQueue) > 0)):

    #Pop off left and right queues
    leftNode = leftQueue.pop(0)
    rightNode = rightQueue.pop(0)

    #Check if the values in each node are equal and set output accordingly
    output = True if (not leftNode and not rightNode) or (leftNode and rightNode and leftNode.value == rightNode.value) else False

    #Queue up their children
    if (leftNode):
      leftQueue.append(leftNode.left)
      leftQueue.append(leftNode.right)

    if (rightNode):
      rightQueue.append(rightNode.right)
      rightQueue.append(rightNode.left)
  
  return output


BinaryTree.isSymmetric = isSymmetric

# LeetCode - Another Faster Solution:

# Definition for a binary tree node.

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# class Solution:
#     def isSymmetric(self, root: Optional[TreeNode]) -> bool:

#         if not root:
#             return True
        
#         def dfs(n1, n2):

#             if n1 and n2:
#                 return n1.val == n2.val and dfs(n1.left, n2.right) and dfs(n1.right, n2.left)
#             return n1 == n2

#         return dfs(root.left, root.right)