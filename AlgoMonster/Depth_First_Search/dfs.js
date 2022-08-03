//Import Binary Tree Data Structure and create example tree
const trees = require('./Trees');

const exampleTree = new trees.BinarySearchTree(10);
exampleTree.buildTree([5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20]);

const dfs = (root, target) => {
  //Base Cases - If there is no current node then return null
  if (!root) {
    console.log("Ran into empty node.");
    return null;
  }

  console.log(`Visiting Node ${root.data}.`)
  //If we find the target, return the node
  if (root.data === target) return root;

  //Search left child - if something non-null is found return it
  let left = dfs(root.left, target);
  if (left != null) return left

  //Search right child - return it either way since if it is null then both left and right branches are null.
  let right = dfs(root.right, target);
  return right
}

// console.log(dfs(exampleTree.root, 5));
console.log(dfs(exampleTree.root, 20));