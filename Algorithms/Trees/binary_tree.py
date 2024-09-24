class BinaryTreeNode:
    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def __str__(self):
        queue = [self]
        currentLevel = 1
        nextLevel = 0
        tree_level = ""

        while len(queue) != 0:
            currentNode = queue.pop(0)
            currentLevel -= 1

            if currentNode.left:
                queue.append(currentNode.left)
                nextLevel += 1

            if currentNode.right:
                queue.append(currentNode.right)
                nextLevel += 1

            tree_level += f"{currentNode.value}  "

            if currentLevel == 0 and nextLevel == 0:
                return tree_level

            if currentLevel == 0:
                print(tree_level)
                tree_level = ""
                currentLevel = nextLevel
                nextLevel = 0


def create_tree_from_list(nodes: list[int]) -> BinaryTreeNode:
    if not nodes:
        return None

    root = BinaryTreeNode(nodes[0])
    q = [root]
    i = 1

    while i < len(nodes):
        curr = q.pop(0)
        if curr:
            if nodes[i]:
                curr.left = BinaryTreeNode(nodes[i])
                q.append(curr.left)
            else:
                curr.left = nodes[i]
            i += 1
        if i < len(nodes) and curr:
            if nodes[i]:
                curr.right = BinaryTreeNode(nodes[i])
                q.append(curr.right)
            else:
                curr.right = nodes[i]
            i += 1

    return root
