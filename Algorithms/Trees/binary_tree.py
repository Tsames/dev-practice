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

root = BinaryTreeNode(5)
firstLevelLeft = BinaryTreeNode(3)
firstLevelRight = BinaryTreeNode(8)
root.left = firstLevelLeft
root.right = firstLevelRight

secondLevelFarLeft = BinaryTreeNode(1)
secondLevelCloseLeft = BinaryTreeNode(4)
firstLevelLeft.left = secondLevelFarLeft
firstLevelLeft.right = secondLevelCloseLeft

secondLevelCloseRight = BinaryTreeNode(6)
secondLevelFarRight = BinaryTreeNode(10)
firstLevelRight.left = secondLevelCloseRight
firstLevelRight.right = secondLevelFarRight

print(root)