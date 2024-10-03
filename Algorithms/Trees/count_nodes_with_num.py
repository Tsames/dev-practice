from binary_tree import BinaryTreeNode, create_tree_from_list
"""
Given a binary tree, count the number of nodes that are equal to a given target.
Function Description: countNodes has the following parameters:
root: the root of the tree
target: the integer to check nodes against

Returns:
int: the number of nodes whose value is equal to the target
"""

def count_nodes_with_num(root, target):
    if not root: return None
    count = 0
    queue = [root]
    
    while len(queue) != 0:
        curr = queue.pop(0)
        
        if curr.value == target:
            count += 1
        
        if curr.left: queue.append(curr.left)
        if curr.right: queue.append(curr.right)
        
    return count

test_root = create_tree_from_list([1,1,2,3,4,5,6,7,8,9,10,1])
print(count_nodes_with_num(test_root, 1)) # Expects 3

print(count_nodes_with_num(test_root, 19)) # Expects 0

test_root_two = create_tree_from_list([])
print(count_nodes_with_num(test_root_two, 1)) # Expects None