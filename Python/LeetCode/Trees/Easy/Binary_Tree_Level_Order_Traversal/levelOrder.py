#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTreeNode, BinaryTree

# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: [[3],[9,20],[15,7]]

# Example 2:
# Input: root = [1]
# Output: [[1]]

# Example 3:
# Input: root = []
# Output: []
 
# Constraints:
# The number of nodes in the tree is in the range [0, 2000].
# -1000 <= Node.val <= 1000

def levelOrder(self, root):
  output = []

  queue = [root]
  currentLevelValues = []

  levelCounter, nextLevelCounter = 1, 0
  
  while (len(queue) > 0):
    current = queue.pop(0)
    currentLevelValues.append(current.value)
    levelCounter -= 1

    if (current.left):
      queue.append(current.left)
      nextLevelCounter += 1

    if (current.right):
      queue.append(current.right)
      nextLevelCounter += 1
    
    if (levelCounter == 0):
      output.append(currentLevelValues)
      currentLevelValues = []
      levelCounter = nextLevelCounter
      nextLevelCounter = 0
  
  return output

testTree = BinaryTree([10,5,15,3,8,13,18,1,4,6,9,11,14,16,19])
print(testTree)
print(levelOrder(testTree.root))



    