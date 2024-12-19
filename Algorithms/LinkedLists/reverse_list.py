"""
https://neetcode.io/problems/reverse-a-linked-list

Reverse a Linked List
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:
Input: head = [0,1,2,3]
Output: [3,2,1,0]

Example 2:
Input: head = []
Output: []

Constraints:
0 <= The length of the list <= 1000.
-1000 <= Node.val <= 1000
"""

from typing import Optional
from listNode import ListNode, createFromList


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None

        while head:
            temp = head.next
            head.next = prev
            prev = head
            head = temp

        return prev


solution = Solution()
print(solution.reverseList(createFromList([1, 2, 3, 4, 5])))
