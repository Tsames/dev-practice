#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Linked_Lists import ListNode, LinkedList

#Given head, the head of a linked list, determine if the linked list has a cycle in it.

# There is a cycle in a linked list if there is some node in the list that can be reached
# again by continuously following the next pointer. Internally, pos is used to denote the index of the node
# that tail's next pointer is connected to. Note that pos is not passed as a parameter.

# Return true if there is a cycle in the linked list. Otherwise, return false.

testList = LinkedList([1,2,1,2,1,2])
# print(testList)
lastNode = testList.getlastNode()
loopNode = testList.getNode(4)
firstNode = testList.getNode(0)
# print(firstNode)
# print(lastNode)
lastNode.next = loopNode


def hasCycle(head):
  nodes = {}

  while (head):
    if (head.next not in nodes):
      nodes[head.next] = 1
    else:
      return True
    head = head.next

  return False


print(hasCycle(firstNode))


