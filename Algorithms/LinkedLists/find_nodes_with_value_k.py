from listNode import Node
'''
Given a linked list and a value k, return the number of nodes that have the value k.
* [execution time limit] 4 seconds (py3)
* [memory limit] 1 GB
* [input] linkedlist.integer node
* [input] integer k
* [output] integer
'''

def solution(node, k):

    total = 0
    
    while node:
        if node.value == k:
            total += 1
        node = node.next
        
    return total