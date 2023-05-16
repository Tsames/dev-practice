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

  leftQueue = [self.root.left]
  rightQueue = [self.root.right]

  output = True

  while (output and (len(leftQueue) > 0 and len(rightQueue) > 0)):

    #Pop off left and right queues
    leftNode = leftQueue.pop(0)
    rightNode = rightQueue.pop(0)

    #Check if the values in each node are equal and set output accordingly
    output = False if leftNode.value != rightNode.value else True

    #Queue up their children
    leftQueue.append(leftNode.left) if leftNode.left else None
    leftQueue.append(leftNode.right) if leftNode.right else None

    rightQueue.append(rightNode.right) if rightNode.right else None
    rightQueue.append(rightNode.left) if rightNode.left else None
  
  return output


BinaryTree.isSymmetric = isSymmetric
testTree = BinaryTree([1,2,2,3,4,4,3,5,6,7,8,8,7,5,6])
print(testTree)
print(testTree.isSymmetric())