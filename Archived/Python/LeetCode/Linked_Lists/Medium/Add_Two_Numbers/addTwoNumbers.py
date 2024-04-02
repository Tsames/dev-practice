#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Linked_Lists import ListNode, LinkedList

# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order, and each of their nodes contains a single digit.
# Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example 1:
# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

# Example 2:
# Input: l1 = [0], l2 = [0]
# Output: [0]

# Example 3:
# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]
 

# Constraints:

# The number of nodes in each linked list is in the range [1, 100].
# 0 <= Node.val <= 9
# It is guaranteed that the list represents a number that does not have leading zeros.

def addTwoNumbers(l1, l2):
  numberOne = ""
  numberTwo = ""

  l1 = l1.head
  l2 = l2.head

  while (l1):
    numberOne = str(l1.value) + numberOne
    l1 = l1.next
  
  while (l2):
    numberTwo = str(l2.value) + numberTwo
    l2 = l2.next

  addedNum = int(numberOne) + int(numberTwo)
  resultingList = [int(i) for i in str(addedNum)[::-1]]

  return LinkedList(resultingList)
  

# testList = LinkedList([1,5,1,5])
# testList2 = LinkedList([2,2,2])

# testList3 = addTwoNumbers(testList, testList2)

# print(testList3)
# print(testList3.__str__())
# print(LinkedList([3,7,3,5]).__str__())
# print(testList3.__str__() == LinkedList([3,7,3,5]).__str__())

