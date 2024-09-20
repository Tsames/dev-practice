from listNode import Node
'''
Given a linked list, return true if all its values are unique and false otherwise.
* [execution time limit] 4 seconds (py3)
* [memory limit] 1 GB
* [input] linkedlist.integer node
* [output] boolean
'''

def solution(node):

    valueSet = set()
    
    while node:
        if node.value in valueSet:
            return False
        else:
            valueSet.add(node.value)
        node = node.next
        
    return True