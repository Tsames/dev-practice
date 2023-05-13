from math import inf

# ------------ Binary Tree Node Class ------------

class BinaryTreeNode:
  def __init__(self, value = None, left = None, right = None):
    self.value = value
    self.left = left
    self.right = right

  def __str__(self):
    left = self.left.value if self.left.value else None
    right = self.right.value if self.right.value else None
    return f"{self.value} -> ({left}) , ({right})"
  
# ------------ Binary Tree Class ------------

class BinaryTree:
  root = None

  # ---%%%--- Constructor ---%%%---
  def __init__(self, initList):
    if (type(initList) is list):
      for data in initList:
        self.insert(data)

  # ---%%%--- Insert New Node ---%%%---
  def insert(self, data):

    if (not self.root):
      self.root = BinaryTreeNode(data)
      return
    
    queue = [self.root]

    while (len(queue) > 0):
      current = queue.pop(0)
      if (self.insertHelper(current, data)):
        return
      queue.append(current.left)
      queue.append(current.right)

  # ---%%%--- Insert Helper ---%%%---
  def insertHelper(self, node, data):
    if (not node.left):
      node.left = BinaryTreeNode(data)
      return True
    elif (not node.right):
      node.right = BinaryTreeNode(data)
      return True
    return False
  
  # ---%%%--- Helper to maxDepth to start Recursive Approach ---%%%---
  def maxDepth(self):
    return self.findMaxDepth(self.root)

  # ---%%%--- Get Max Depth ---%%%---
  def findMaxDepth(self, root):
    if (not root):
      return 0
    
    left = self.findMaxDepth(root.left)
    right = self.findMaxDepth(root.right)

    return max(left, right) + 1
  
  # ---%%%--- Recursive Helper ---%%%---
  def isValidBST(self):
    return self.getValidBST(self.root, -inf, inf)

  # ---%%%--- Recursively Determine if Binary Tree is also a Binary Search Tree ---%%%---
  def getValidBST(self, root, min, max):

    if (not root):
      return True
    
    #  ---%%%--- Return False if either requirement for BST is not true ---%%%---
    if ((root.left and root.left.value) and (root.left.value >= root.value or root.left.value <= min)):
      return False

    if ((root.right and root.right.value) and (root.right.value <= root.value or root.right.value >= max)):
      return False
    
    # ---%%%--- Return Recrsive call on left and right subtrees ---%%%---
    return self.getValidBST(root.left, min, root.value) and self.getValidBST(root.right, root.value, max)
  
  # ---%%%--- Return a node based on its value, and (or) its children's values ---%%%---
  def find(self, value, left, right):
    pass

  # ---%%%--- String Representation of Binary Tree ---%%%---
  def __str__(self):
    if (not self.root):
      return f"This tree is empty."
    
    output = """"""
    queue = [self.root]
    parentQueue = [None]
    levelCount, currentCount = 1, 0

    while (len(queue) > 0):
      current = queue.pop(0)
      parent = parentQueue.pop(0)
      levelCount -= 1

      output = output + f"{current.value} ({parent}) "

      if (current.left):
        queue.append(current.left)
        parentQueue.append(current.value)
        currentCount += 1

      if (current.right):
        queue.append(current.right)
        parentQueue.append(current.value)
        currentCount += 1

      if (levelCount == 0):
        output = output + "\n"
        levelCount = currentCount

    return output