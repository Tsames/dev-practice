# ------------ Linked List Node Class ------------

class ListNode:
  def __init__(self, value, next):
    self.value = value
    self.next = next

  def __str__(self):
    return f"({self.value}) -> {self.next.value if self.next != None else 'None'}"
  
# ------------ Linked List Class ------------

class LinkedList:

  # ---%%%--- Constructor ---%%%---
  def __init__(self, nodeValues = []):
    self.head = None
    self.length = 0

    for value in nodeValues:
      self.append(value)

  # ---%%%--- Get and return the last node in the list ---%%%---
  def getlastNode(self):
    if (self.head == None):
      return None
    else:
      currentNode = self.head
      while (currentNode.next != None):
        currentNode = currentNode.next
      return currentNode
    
  # ---%%%--- Get and return the nth node in the list ---%%%---
  #Optional node argument that, if supplied, will retrieve the nth node from node
  def getNode(self, n, node = None):
    if (node == None and self.head == None):
      return None
    else:
      currentNode = self.head if node == None else node
      for i in range(n):
        if currentNode != None:
          currentNode = currentNode.next
        else:
          break
    return currentNode

  # ---%%%--- Add a new node to the end of the list, return nothing ---%%%---
  def append(self, value):
    newNode = ListNode(value, None)
    self.length += 1
    if (self.head == None):
      self.head = newNode
    else:
      lastNode = self.getlastNode()
      lastNode.next = newNode

  # ---%%%--- Add a new node to the beginning of the list, return nothing ---%%%---
  def prepend(self, value):
    self.length += 1
    if (self.head == None):
      newNode = ListNode(value, None)
      self.head = newNode
    else:
      newNode = ListNode(value, self.head)
      self.head = newNode

  # ---%%%--- Remove and return last node ---%%%---
  def pop(self):
    if (self.length == 0):
      return
    elif (self.length == 1):
      output = self.head
      self.head = None
      self.length -= 1
      return output
    else:
      newLastNode = self.getNode(self.length - 1)
      lastNode = newLastNode.next
      newLastNode.next = None
      self.length -= 1
      return lastNode
    
  # ---%%%--- Remove and return head node ---%%%---
  def removeHead(self):
    if (self.head == None):
      return
    else:
      oldHead = self.head
      self.head = self.head.next if self.length > 1 else None
      self.length -= 1
      return oldHead
    
  # ---%%%--- Remove and return the nth node ---%%%---
  #Optional node argument, that if supplied, will remove the nth node from node
  def remove(self, n, node = None):
    targetStart = self.head if node == None else node
    if (targetStart == None):
      return None
    else:
      beforeTargetNode = self.getNode(n - 1, node)

      if (beforeTargetNode == None or beforeTargetNode.next == None):
        return None
      else:
        targetNode = beforeTargetNode.next
        beforeTargetNode.next = targetNode.next
        return targetNode
      
  def insert(self, n, value, node = None):
    if (node == None and self.head == None):
      self.append(value)
    targetStart = self.head if node == None else node
    beforeTargetNode = self.getNode(n - 1, node)

  # ---%%%--- String Representation of Linked List ---%%%---
  def __str__(self):
    output_string = ""
    currentNode = self.head
    while (currentNode != None):
      output_string += f"({currentNode.value}) -> "
      currentNode = currentNode.next
    return output_string

# new_linked_list = LinkedList([1, 2, 3, 4, 5])
# print(new_linked_list) # (1) -> (2) -> (3) -> (4) -> (5) ->
# print(new_linked_list.length) #5
# print(new_linked_list.getlastNode()) # (5) -> None
# print(new_linked_list.getNode(3)) #(3) -> (4)
# print(new_linked_list.getNode(100)) #None
# new_linked_list.prepend(0)
# print(new_linked_list) #(0) -> (1) -> (2) -> (3) -> (4) -> (5) ->
# print(new_linked_list.pop()) #(5) -> None
# print(new_linked_list) #(0) -> (1) -> (2) -> (3) -> (4) ->
# print(new_linked_list)
# lastNode = new_linked_list.getNode(3)
# print(new_linked_list.remove(0))
# print(new_linked_list)


