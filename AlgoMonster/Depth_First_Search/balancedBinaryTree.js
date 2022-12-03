const trees = require('./binaryTree');

const exampleTree = new trees.BinarySearchTree(10);
exampleTree.buildTree([5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20]);

const treeHeight = (root) => {
  //Base Case - If the node is null return 0
  if (!root) return 0;

  //Run a recursive call on each branch of the current node
  let left = isBalanced(root.left);
  let right = isBalanced(root.right);

  /* If either branch is unbalanced they are returning -1 so if either child 
  returns -1 pass -1 further up the call stack */
  if (left === -1 || right === -1) return -1
  if (Math.abs(left - right) > 1) return -1

  /* Finally if we've gone through all those conditionalities
  and none apply return the actual depth of the branch */
  return 1 + Math.max(left, right)
}

const isBalanced = (root) => {
  return treeHeight(root) !== -1;
}

console.log(isBalanced(exampleTree.root));