"""
https://neetcode.io/problems/reorder-linked-list

Reorder Linked List
You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

Example 1:
Input: head = [2,4,6,8]
Output: [2,8,4,6]

Example 2:
Input: head = [2,4,6,8,10]
Output: [2,10,4,8,6]

Constraints:
1 <= Length of the list <= 1000.
1 <= Node.val <= 1000
"""
from listNode import Node, create_linked_list_from_list

def reorder_with_linear_space(root: Node) -> Node:
    nodes = []
    curr = root
    
    while curr:
        nodes.append(curr)
        curr = curr.next
        
    left_pointer = 0
    right_pointer = len(nodes) - 1
    
    while left_pointer < right_pointer:
        nodes[left_pointer].next = nodes[right_pointer]
        left_pointer += 1
        nodes[right_pointer].next = nodes[left_pointer]
        right_pointer -= 1
        
    nodes[right_pointer].next = None
    
    return root

example_list = create_linked_list_from_list([1,2,3,4,5,6,7,8,9])
print(example_list)
reorder_with_linear_space(example_list)
print(example_list)

        