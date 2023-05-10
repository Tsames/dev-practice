# ------------ Binary Tree Node Class ------------

class BinaryTreeNode:
  def __init__(self, value = None, left = None, right = None):
    self.value = value
    self.left = left
    self.right = right

  def __str__(self):
    return f"({self.value} -> ({self.left}) , ({self.right}))"
  
# ------------ Binary Tree Class ------------

class BinaryTree:
  root = None

  def __init__(self, initList):
    if (type(initList) is list):
      for data in initList:
        self.insert(data)

def insert(self, data):

  if (self.root == None):
    self.root = BinaryTreeNode(data)
    return
  
  queue = [self.root]

  while (len(queue) > 0):
    current = queue.pop(0)
    if (insertHelper(current, data)):
      return
    queue.append(current.left)
    queue.append(current.right)

def insertHelper(self, node, data):
  if (node.left == None):
    node.left = BinaryTreeNode(data)
    return True
  elif (node.right == None):
    node.right = BinaryTreeNode(data)
    return True
  return False
