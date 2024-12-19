from binary_tree import createFromList

"""
Given a binary tree, count the number of non-leaf nodes (leaf nodes do not have any children).  
"""


def count_leaf_nodes(root):
    count = 0
    queue = [root]

    while len(queue) != 0:
        curr = queue.pop(0)

        if curr.left or curr.right:
            count += 1

        if curr.left:
            queue.append(curr.left)
        if curr.right:
            queue.append(curr.right)

    return count


test_root = createFromList([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])
print(count_leaf_nodes(test_root))  # Expects 6

test_root_two = createFromList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 2, 2])
print(count_leaf_nodes(test_root_two))  # Expects 6
