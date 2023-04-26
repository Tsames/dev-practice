# ------------ Linked List Node Class ------------

class ListNode:
  def __init__(self, value, next):
    self.value = value
    self.next = next

  def __str__(self):
    return f"({self.value}) -> {self.next.value if self.next != None else 'None'}"
  
# ------------ Linked List Class ------------

class LinkedList:
  def __init__(self, nodeValues = []):
    self.head = None
    self.length = 0

    for value in nodeValues:
      self.append(value)

  # def length(self):
  #   size = 0
  #   currentNode = self.head
  #   while (currentNode != None):
  #     size += 1
  #     currentNode = currentNode.next
  #   return size

  def getlastNode(self):
    if (self.head == None):
      return None
    else:
      currentNode = self.head
      while (currentNode.next != None):
        currentNode = currentNode.next
      return currentNode
    
  def getNode(self, n):
    if (self.head == None):
      return None
    else:
      currentNode = self.head
      for i in range(n - 1):
        if currentNode != None:
          currentNode = currentNode.next
        else:
          break
    return currentNode

  def append(self, value):
    newNode = ListNode(value, None)
    self.length += 1
    if (self.head == None):
      self.head = newNode
    else:
      lastNode = self.getlastNode()
      lastNode.next = newNode

  def prepend(self, value):
    self.length += 1
    if (self.head == None):
      newNode = ListNode(value, None)
      self.head = newNode
    else:
      newNode = ListNode(value, self.head)
      self.head = newNode

  def __str__(self):
    output_string = ""
    currentNode = self.head
    while (currentNode != None):
      output_string += f"({currentNode.value}) -> "
      currentNode = currentNode.next
    return output_string

new_linked_list = LinkedList([1, 2, 3, 4, 5])
print(new_linked_list) # (1) -> (2) -> (3) -> (4) -> (5) ->
# print(new_linked_list.length) #5
# print(new_linked_list.getlastNode()) # (5) -> None
# print(new_linked_list.getNode(3)) #(3) -> (4)
# print(new_linked_list.getNode(100)) #None
print(new_linked_list.prepend(0))
print(new_linked_list.length)
print(new_linked_list)

