#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Linked_Lists import ListNode, LinkedList

# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

def mergeTwoLists(list1, list2):
  outputList = []
  listOnePointer = list1.head
  listTwoPointer = list2.head

  while (listOnePointer or listTwoPointer):

    if ((listOnePointer and listTwoPointer) and listOnePointer.value <= listTwoPointer.value):
      outputList.append(listOnePointer.value)
      listOnePointer = listOnePointer.next
    elif(listTwoPointer):
      outputList.append(listTwoPointer.value)
      listTwoPointer = listTwoPointer.next
    else:
      outputList.append(listOnePointer.value)
      listOnePointer = listOnePointer.next


  return LinkedList(outputList)


testList1 = LinkedList([1,3,5,7,9,11,13])
testList2 = LinkedList([2,4,6,8])
newList = mergeTwoLists(testList1, testList2)
print(newList)