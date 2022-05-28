//Import Binary Tree Data Structure and create example tree
const bt = require('./binaryTree');

const exampleTree = new bt.BinaryTree(10, 10);
exampleTree.buildTree([1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20]);

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