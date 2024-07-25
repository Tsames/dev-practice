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


#Slower than O(n)
def isPalindrome(head):
  
  #Create Recursive Resverse LinkedList Function
  def reverse(prev, current):
    if not current:
      return prev
    temp = current.next
    current.next = prev
    return reverse(current, temp)
  
  #Get the middle Node of the LinkedList using two pointers
  slowP = head
  fastP = slowP
  while (fastP and fastP.next):
    slowP = slowP.next
    fastP = fastP.next.next

  print(f"The middle node of the LinkedList is {slowP}")

  #Get the reverse of the list starting with the middle node
  reverseList = reverse(None, slowP)

  #Define Recursive checking function
  def checkPalindrome(originalList, reverseList):
    print("checking new node...")
    #If we run out of nodes to check the originalList to then it is a Palindrome
    if (not reverseList):
      print("end of reverseList, its a palindrome")
      return True
    #If the value of the two nodes are equal, check the next nodes
    elif (originalList.value == reverseList.value):
      print(f"The two values match! originalList is {originalList.value} and reverseList is {reverseList.value}.")
      return checkPalindrome(originalList.next, reverseList.next)
    else:
      print(f"The two values do not match ; originalList is {originalList.value} and reverseList is {reverseList.value}. This LinkedList is not a palindrome.")
      return False
  
  return checkPalindrome(head, reverseList)    


testList = LinkedList([1,0,0,2,3,2,7,0,1])
isPalindrome(testList.head)