from binary_tree import create_tree_from_list
"""
Given a binary tree and a depth, remove all nodes that are lower than that depth.
Function Description replaceNodeValuesBT has the following parameters:

root: the root of the treedepth: the max depth. This value will be >= 0
Returns: The root of the tree
"""

def cut_tree(root, depth):
    level = 0
    currentLevelQueue = [root]
    nextLevelQueue = []
    
    while len(currentLevelQueue) != 0:
        curr = currentLevelQueue.pop()
        
        if level == depth:
            curr.left = None
            curr.right = None
        
        if curr.left: nextLevelQueue.append(curr.left)
        if curr.right: nextLevelQueue.append(curr.right)
        
        if len(currentLevelQueue) == 0:
            level += 1
            currentLevelQueue = nextLevelQueue
            nextLevelQueue = []
    
    return root

test_root = create_tree_from_list([1,2,3,4,5,6,7,8,9,10])
print(cut_tree(test_root, 1))

test_root_two = create_tree_from_list([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
print(cut_tree(test_root_two, 2))