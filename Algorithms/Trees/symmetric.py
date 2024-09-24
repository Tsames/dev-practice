from binary_tree import BinaryTreeNode, create_tree_from_array

"""
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
 
Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
"""


def is_tree_symmetric(head: BinaryTreeNode) -> bool:

    return are_subtrees_symmetric(head.left, head.right)


def are_subtrees_symmetric(leftSubtree, rightSubTree):
    # Base case is if the nodes passed are both None, then return True
    if not leftSubtree and not rightSubTree:
        return True
    # If one is True and the other is False, return True
    elif not leftSubtree or not rightSubTree:
        return False
    # Otherwise we are returning the function run
    else:
        return (
            leftSubtree.value == rightSubTree.value
            and are_subtrees_symmetric(leftSubtree.left, rightSubTree.right)
            and are_subtrees_symmetric(leftSubtree.right, rightSubTree.left)
        )


exampleRootOne = create_tree_from_array([1, 2, 2, 3, 4, 4, 3])
exampleRootTwo = create_tree_from_array([1, 2, 2, None, 3, None, 3])

print(is_tree_symmetric(exampleRootOne))
print(is_tree_symmetric(exampleRootTwo))
