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

  def insertHelper(self, node, data):
    if (not node.left):
      node.left = BinaryTreeNode(data)
      return True
    elif (not node.right):
      node.right = BinaryTreeNode(data)
      return True
    return False

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


testTree = BinaryTree([1,2,3,4,5,6,7])
print(testTree)