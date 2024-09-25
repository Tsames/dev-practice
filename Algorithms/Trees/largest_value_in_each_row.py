from binary_tree import BinaryTreeNode, create_tree_from_list
"""
Given the root of a binary tree, return an array of the largest value
in each row of the tree (0-indexed).

Example 1:
Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]

Example 2:
Input: root = [1,2,3]
Output: [1,3]
 
Constraints:

The number of nodes in the tree will be in the range [0, 104].
-231 <= Node.val <= 231 - 1
"""


def largest_value_in_each_row(root: BinaryTreeNode) -> list[int]:
    values = []
    currentLevelQueue = [root]
    nextLevelQueue = []
    largest_value = float("-inf")

    while len(currentLevelQueue) > 0:
        curr = currentLevelQueue.pop(0)

        if curr:
            if largest_value < curr.value:
                largest_value = curr.value

            nextLevelQueue.append(curr.left)
            nextLevelQueue.append(curr.right)

        if len(currentLevelQueue) == 0:
            if largest_value != float("-inf"):
                values.append(largest_value)
            currentLevelQueue = nextLevelQueue
            nextLevelQueue = []
            largest_value = float("-inf")

    return values


exampleOneRoot = create_tree_from_list([1, 3, 2, 5, 3, None, 9])
exampleTwoRoot = create_tree_from_list([1, 2, 3])

print(largest_value_in_each_row(exampleOneRoot))  # [1,3,9]
print(largest_value_in_each_row(exampleTwoRoot))  # [1,3]
