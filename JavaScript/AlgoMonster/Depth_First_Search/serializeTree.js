const trees = require('./binaryTree');

const exampleTree = new trees.BinarySearchTree(10);
exampleTree.buildTree([5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20]);

const serializeTree = (root) => {
  if (!root) return "x ";

  let string = `${root.data} `
  let left = serializeTree(root.left);
  let right = serializeTree(root.right);
  return string + left + right;
}

console.log(serializeTree(exampleTree.root));

const deSerializeTree = (root, string) => {

}