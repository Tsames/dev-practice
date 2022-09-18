//Import Binary Tree Data Structure and create example tree
const trees = require('./../../Data_Structures/Trees/binaryTree');

const exampleTree = new trees.BinaryTree([10, 5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20]);

const dfs = (root, target) => {
  //Base Cases - If there is no current node then return null
  if (!root) return null;

  //If we find the target, return the node
  if (root.data === target) return root;

  //Search left child - if something non-null is found return it
  let left = dfs(root.left, target);
  if (left) return left

  //Search right child - return it either way since if it is null then both left and right branches are null.
  return dfs(root.right, target);
}

// console.log(dfs(exampleTree.root, 5));
console.log(dfs(exampleTree.root, 20));