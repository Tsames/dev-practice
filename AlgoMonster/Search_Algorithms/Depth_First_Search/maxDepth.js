const bt = require('./binaryTree');

const newTree = new bt.BinaryTree();
newTree.buildTree([1,2,3]);

console.log(newTree.root.data);
console.log(newTree.root.left);
