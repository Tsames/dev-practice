from listNode import ListNode

"""
Given a target k, create a linked list with values starting at 0 and incrementing by 1 until k.
For example, given k = 3, return:0 -> 1 -> 2 -> 3
You may assume k >= 0.

* [execution time limit] 4 seconds (py3)
* [memory limit] 1 GB
* [input] integer k
* [output] linkedlist.integer
"""


def solution(k):

    count = 0
    result = ListNode(None)
    lastNode = result

    while count <= k:
        newNode = ListNode(count)
        lastNode.next = newNode
        lastNode = newNode
        count += 1

    return result.next
