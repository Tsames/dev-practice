from binary_tree import BinaryTreeNode, create_tree_from_list

"""
Given the root of a binary search tree and an integer k,
return true if there exist two elements in the BST such that their sum is equal to k,
or false otherwise.

Example 1:
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Example 2:
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-104 <= Node.val <= 104
root is guaranteed to be a valid binary search tree.
-105 <= k <= 105
"""


def two_sum(head: BinaryTreeNode, k: int) -> bool:
    values = set()
    queue = [head]

    while len(queue) > 0:
        curr = queue.pop(0)
        if not curr:
            continue

        if (k - curr.value) in values:
            return True
        else:
            values.add(curr.value)

        queue.append(curr.left)
        queue.append(curr.right)

    return False


exampleRootOne = create_tree_from_list([5, 3, 6, 2, 4, None, 7])

print(two_sum(exampleRootOne, 9))  # True
print(two_sum(exampleRootOne, 28))  # False
