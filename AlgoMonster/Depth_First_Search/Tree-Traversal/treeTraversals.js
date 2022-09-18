const trees = require('../Trees');

const exampleTree = new trees.BinarySearchTree(10);
exampleTree.buildTree([5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20]);

const InOrder = (root) => {
  if (root) {
    InOrder(root.left);
    console.log(root.data);
    InOrder(root.right);
  }
}

const preOrder = (root) => {
  if (root !== null) {
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
  }
}

const postOrder = (root) => {
  if (root !== null) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
  }
}

InOrder(exampleTree.root);
preOrder(exampleTree.root);
postOrder(exampleTree.root);
