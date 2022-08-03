# Tree Traversal

## In Order Traversal

###### <font color="yellow">The Idea</font>

Print the left branch, then the root, then the right branch. For Binary Search Trees the numbers will be printed / visited in ascending order or "in order".

###### <font color="yellow">Execution</font>

Recursively Execute the following starting with the root:

If there is a left child make a recursive call passing the left child.
Print the current node.
If there is a right child make a recursive call passing the right child.

Thats it, Done!

## Pre-Order Traversal

###### <font color="yellow">The Idea</font>

The Idea and execution is very similar to In-Order traversal, but this time the current node is printed / visited before visisting the left child and then the right child.

## Pre-Order Traversal

###### <font color="yellow">The Idea</font>

The Idea and execution is very similar to In-Order traversal, but this time the left child and then the right child are visited before the current node is printed / visisted.