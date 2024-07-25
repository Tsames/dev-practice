const binaryTree = require('../../../../Data_Structures/Trees/binaryTree');

/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */

const exampleTreeOne = new binaryTree.BinarySearchTree([3, 9, 20, null, null, 15, 7]);
exampleTreeOne.prettyPrint();

const maxDepth = (root) => {

    if (!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return 1 + Math.max(left, right)
}

module.exports = maxDepth