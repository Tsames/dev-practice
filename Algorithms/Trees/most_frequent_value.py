from binary_tree import create_tree_from_list

"""
Given a binary tree, return the most frequent value. If multiple most frequent exist, return any at random.
Function Descriptionsolution has the following parameters:
root: the root of the tree
Returns: The int value that is most frequent in the tree
"""

def most_frequent_value(root):
    values = {}
    queue = [root]
    
    while len(queue) != 0:
        curr = queue.pop(0)
        if curr.value in values:
            values[curr.value] += 1
        else:
            values[curr.value] = 1
        
        if curr.left: queue.append(curr.left)
        if curr.right: queue.append(curr.right)
    
    most_frequent_num = list(values.keys())[0]
    for value in values.keys():
        if values[value] > values[most_frequent_num]:
            most_frequent_num = value
    
    return most_frequent_num

test_root = create_tree_from_list([1,1,2,3,4,5,6,7,8,9,10,1])
print(most_frequent_value(test_root)) # Expects 1