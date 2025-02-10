"""
Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 
Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
"""

"""
This problem is about basic arithmatic in addition to linked lists.
Since the numbers are stored in reverse over in the given linked lists, we can traverse those list in order.
At each node, add the two, if applicable. 
If the result is greater than 10, we save 1 to a variable outside our loop.
If it isn't we set our outside variable to 0 instead.
"""

from Algorithms.LinkedLists.list_node import ListNode, createFromList


class Solution:
    def add_two_numbers_again(self, l1: ListNode, l2: ListNode) -> ListNode:

        # Create our result head
        res = curr = ListNode(None)

        # Create outside variable to keep track of carrying the ones
        carry = 0

        while l1 or l2 or carry:
            sum = carry

            if l1:
                sum += l1.val
                l1 = l1.next

            if l2:
                sum += l2.val
                l2 = l2.next

            if sum > 9:
                carry = 1
                sum = sum % 10
            else:
                carry = 0

            curr.next = ListNode(sum)
            curr = curr.next

        return res.next
