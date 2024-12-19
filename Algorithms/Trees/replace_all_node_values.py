from binary_tree import createFromList

"""
Given a binary tree, a target and a replacement, replace all nodes with the target value with the replacement value.

Function Description solution has the following parameters:
root: the root of the tree
target: the integer to replace
replacement: the integer to replace target with
Returns: The root of the list
"""


def replace_all_node_values(root, target, replacement):
    queue = [root]

    while len(queue) != 0:
        curr = queue.pop(0)

        if curr.value == target:
            curr.value = replacement

        if curr.left:
            queue.append(curr.left)
        if curr.right:
            queue.append(curr.right)

    return root


test_root = createFromList([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])
print(replace_all_node_values(test_root, 1, 3))  # Expects new tree with no 1s

test_root_two = createFromList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 2, 2])
print(replace_all_node_values(test_root_two, 2, 3))  # Expects new tree with no 2s
