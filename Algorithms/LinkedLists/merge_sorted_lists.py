"""
https://neetcode.io/problems/merge-two-sorted-linked-lists

Merge Two Sorted Linked Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
The new list should be made up of nodes from list1 and list2.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]

Example 2:
Input: list1 = [], list2 = [1,2]
Output: [1,2]

Example 3:
Input: list1 = [], list2 = []
Output: []

Constraints:
0 <= The length of the each list <= 100.
-100 <= Node.val <= 100
"""
# from listNode import ListNode, createFromList
from typing import Optional

class ListNode:
    def __init__(self, val: int = None, next: Optional["ListNode"] = None):
        self.val = val
        self.next = next
        

def solution(list1: ListNode, list2: ListNode) -> ListNode:
    '''
    First we'll need a variable to hold the head of our new linked list so we can return it at the end. -> dummy_head
    We will also need a variable to hold the current node that we are at when creating our new linked list -> curr
    
    Then we'll want to iterate as long as list1 and list2 are not both None
    If list1 is not None, add the next node to our new list, then move the pointer further down the list
    Repeat for list2
    
    return dummy_head.next
    '''
    dummy_head = curr = ListNode()
    
    while list1 or list2:
        if list1 and list2:
            
            curr.next = list1
            list1 = list1.next
            
        if list2:
            curr.next = list2
            list2 = list2.next
            
    return dummy_head.next






































class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = curr = ListNode()

        while l1 and l2:
            if l1.val <= l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next

        if l1:
            curr.next = l1
        else:
            curr.next = l2

        return dummy.next


solution = Solution()
print(
    solution.mergeTwoLists(
        createFromList([1, 3, 5, 7, 9]), createFromList([2, 4, 6, 8])
    )
)
