#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Linked_Lists import ListNode, LinkedList

# Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

# Example 1:
# Input: head = [1,2,2,1]
# Output: true

# Example 2:
# Input: head = [1,2]
# Output: false
 
# Constraints:

# The number of nodes in the list is in the range [1, 105].
# 0 <= Node.val <= 9
 
# Follow up: Could you do it in O(n) time and O(1) space?

def isPalindrome(head):
  
  #Find the Middle Node
  pointerSlow = head
  pointerFast = head
  nodeValues = [head.value]

  while(pointerFast and pointerFast.next):
    pointerFast = pointerFast.next.next
    pointerSlow = pointerSlow.next
    nodeValues.append(pointerSlow.value)
  
  print(f"pointerFast ends at {pointerFast}")
  print(f"pointerSlow ends at {pointerSlow.value}")
  print(f"Here is what our list nodeValues looks like {nodeValues}")



testList = LinkedList([1,0,0,2,3,0,0,1])
isPalindrome(testList.head)