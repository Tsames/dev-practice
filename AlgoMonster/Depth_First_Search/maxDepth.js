//Import Binary Tree Data Structure and create example tree
const trees = require('./binaryTree');

const exampleTree = new trees.BinarySearchTree(10);
exampleTree.buildTree([5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20]);
exampleTree.prettyPrint();

//Max depths function
function maxDepth(currentNode) {

  //Base Case - If we reach a null then just return 0;
  if(currentNode === null) {
    return 0;
  }

  /* Since its max-depth we would return the the maximum of either left or right subtree.
   We add one to account for the current node that our recursive function is called on. */
  return 1 + Math.max(maxDepth(currentNode.left), maxDepth(currentNode.right));
}

//Test
console.log(maxDepth(exampleTree.root));