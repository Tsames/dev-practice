from binary_tree import createFromList

"""
Given a binary tree t, return its left view. To understand what the left view of the tree means,
imagine yourself standing on the left side of the tree: The left view will be all the vertices
that you can see. For example, imagine the following tree:
   
In this case, you can see vertices 1, 2, 5, and 6.
The 6 is on the right branch of the tree, but is visible from the left because there are no nodesto its left on the same level.
Given binary tree t, return the values of the vertices in the left view, ordered from top to bottom.

Example
For

t = {
    "value": 5,
    "left": {
        "value": 3,
        "left": null,
        "right": {
            "value": -1,
            "left": {
                "value": 8,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": null,
        "right": {
            "value": 10,
            "left": null,
            "right": null
        }
    }   
}

the output should be solution(t) = [5, 3, -1, 8].
"""


def left_view(root):
    if not root:
        return []

    res = [root.value]
    queue = [root]
    next_queue = []

    while len(queue) != 0:
        curr = queue.pop(0)

        if curr.left:
            next_queue.append(curr.left)
        if curr.right:
            next_queue.append(curr.right)

        if len(queue) == 0:
            if len(next_queue) > 0:
                res.append(next_queue[0].value)
            queue = next_queue
            next_queue = []

    return res


test_root = createFromList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(left_view(test_root))
