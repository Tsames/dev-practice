from listNode import Node
'''
Note: Your solution should have O(l.length) time complexity and O(1) space complexity
Given a singly linked list, reverse and return it.

Example
For l = [1, 2, 3, 4, 5],
the output should be solution(l) = [5, 4, 3, 2, 1].

'''

def solution(head):
    curr = head
    previousNode = None
    
    while curr:
        nextNode = curr.next
        
        curr.next = previousNode
        previousNode = curr
        curr = nextNode
    
    return previousNode