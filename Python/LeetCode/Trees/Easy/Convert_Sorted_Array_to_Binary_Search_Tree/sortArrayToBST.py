#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTreeNode, BinaryTree

# Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

# Example 1:
# Input: nums = [-10,-3,0,5,9]
# Output: [0,-3,9,-10,null,5]
# Explanation: [0,-10,5,null,-3,null,9] is also accepted:

# Example 2:
# Input: nums = [1,3]
# Output: [3,1]
# Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

# Constraints:

# 1 <= nums.length <= 104
# -104 <= nums[i] <= 104
# nums is sorted in a strictly increasing order.

def sortedArrayToBST(self, nums):

  def recursiveHelper(self, nums):
    if(len(nums) <= 0):
      return None
    
    #Find the middle of the sorted array and make a BinaryTreeNode from it
    middleIndex = round((len(nums) - 1)/2)
    currentNode = BinaryTreeNode(nums[middleIndex])

    #Set the left child equal to a recursive call on the left sub-array not including the currentNode
    currentNode.left = recursiveHelper(self, nums[:middleIndex])
    #Set the right child equal to a recursive call on the right sub-array not including the currentNode
    currentNode.right = recursiveHelper(self, nums[middleIndex + 1:])

    return currentNode
  
  self.root = recursiveHelper(self, nums)
  return self.root

BinaryTree.sortedArrayToBST = sortedArrayToBST

