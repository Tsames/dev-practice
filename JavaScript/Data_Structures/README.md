# Data Structures

This subfolder of my practice repo houses my efforts to recreate traditional data structures and their commonly used methods from scratch in JavaScript. I've been doing this to supplement my preparation for technical interviews.

Each distinct data structure is seperated into their own subfolder where any variations are grouped with them. The complete list of data structures I've coded is as follows:

- Singly Linked List
- Doubly Linked List
- Queue
- Stack
- Binary Tree
- Binary Search Tree

### Data Structure Variations and their Methods

You'll notice that some of the variations of a vanilla data structure (such as the Binary Tree and the Binary Search Tree) have similar methods. For example, the count() function for both the Binary Tree and the Binary Search Tree is exactly the same. 

However, I hope you'll take a closer look and notice that where meaningful differences could be made due to the difference in the data structure, I made them. For example, take a look at the difference between the removeAt() method for both the Singly Linked List and Doubly Linked List data structures. The method, in each case, removes a node at a certain position in the list. However, in the case of a Singly Linked List we have to find the node that preceeds the node we are looking to remove because in a Singly Linked List there is no way to get the parent node from the child node. Whereas, in the Doubly Linked List version we can get the parent node from the child, so we find the node that we want to remove instead.

