from binary_tree import create_tree_from_list
"""
Given a binary tree, return the in-order traversal of its nodes' values.
You must use iterative approach.

In-order traversal:
1. Traverse the left subtree.
2. Visit the root.
3. Traverse the right subtree.

Example:
* Given a binary tree:
           1
          / \
         2   3
returns [2, 1, 3]
"""

def pre_order_dfs(root):
    res = []
    
    def pre_order(root):
        # Base Case
        if not root: return
        
        res.append(root.value)
        pre_order(root.left)
        pre_order(root.right)
    
    pre_order(root)
    return res  

def in_order_dfs(root):
    res = []
    
    def in_order(root):
        # Base Case
        if not root: return
        
        in_order(root.left)
        res.append(root.value)
        in_order(root.right)
    
    in_order(root)
    return res  

def post_order_dfs(root):
    res = []
    
    def post_order(root):
        # Base Case
        if not root: return
        
        post_order(root.left)
        post_order(root.right)
        res.append(root.value)
    
    post_order(root)
    return res  

test_root = create_tree_from_list([1,2,3,4,5,6,7,8,9,10])
print(test_root)
print(f"Pre-order DFs: {pre_order_dfs(test_root)}")
print(f"In-order DFs: {in_order_dfs(test_root)}")
print(f"Post-order DFs: {post_order_dfs(test_root)}")