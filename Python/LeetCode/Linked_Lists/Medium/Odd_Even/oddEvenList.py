#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Linked_Lists import ListNode, LinkedList

# Given the head of a singly linked list, group all the nodes with odd indices together
# followed by the nodes with even indices, and return the reordered list.
# The first node is considered odd, and the second node is even, and so on.
# Note that the relative order inside both the even and odd groups should remain as it was in the input.
# You must solve the problem in O(1) extra space complexity and O(n) time complexity.

# Example 1:
# Input: head = [1,2,3,4,5]
# Output: [1,3,5,2,4]

# Example 2:
# Input: head = [2,1,3,5,6,4,7]
# Output: [2,3,6,7,1,5,4]
 
# Constraints:
# The number of nodes in the linked list is in the range [0, 104].
# -106 <= Node.val <= 106

#Solve it without worry about a time complexity of O(n) or a space complexity of O(1)
def slowOddEvenList(listHead):

  evenHead = ListNode(0, None)
  oddHead = ListNode(0, None)

  index = 1

  evenPointer = evenHead
  oddPointer = oddHead

  while listHead:
    if (index % 2 == 0):
      # print(f"Adding {listHead.value} to as next node to {evenPointer.value} in the even list.")
      evenPointer.next = listHead
      evenPointer = evenPointer.next
    else:
      # print(f"Adding {listHead.value} to as next node to {oddPointer.value} in the odd list.")
      oddPointer.next = listHead
      oddPointer = oddPointer.next
    listHead = listHead.next
    index += 1

  # evenHead.printFromHere()
  # oddHead.printFromHere()

  oddPointer.next = evenHead.next
  evenPointer.next = None

  # print(f"Returning final list:")
  oddHead.next.printFromHere()
  return oddHead.next


testList = LinkedList([1,6,2,7,3,8,4,9,5,10])
slowOddEvenList(testList.head)


def fastOddEvenList():
  pass