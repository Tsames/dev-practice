const binaryTree = require('../../../../Data_Structures/Trees/binaryTree');

/* Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees. */

const validateTree = (node, lowerBound = Number.NEGATIVE_INFINITY, upperBound = Number.POSITIVE_INFINITY) => {

    //Base Case - If the root is empty or if the current node doesn't have any children return true
    if (!node) {
        return true;
    }

    //Check and see if the node's value falls outside the bounds, if it doesn't return false
    if (node.data <= lowerBound || upperBound <= node.data){
        return false;
    }

    //Otherwise run this function recursively on all children
    let left = true, right = true;

    //When we recursively run the function on the left subtree we set a new upperBound, since all following nodes must be smaller than this one.
    if (node.left) left = validateTree(node.left, lowerBound, node.data);

    //When we recursively run the function on the right subtree we set a new lowerBound, since all following nodes must be larger than this one.
    if (node.right) right = validateTree(node.right, node.data, upperBound);

    //Return false if any subtrees ended up false, and true otherwise
    return left && right;

}

module.exports = validateTree
