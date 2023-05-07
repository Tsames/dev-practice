//Import Binary Tree Data Structure and create example tree
const trees = require('./Trees');

const exampleTree = new trees.BinarySearchTree(10);
exampleTree.buildTree([5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20]);

const countVisible = (root, largest = Number.NEGATIVE_INFINITY) => {
  if (!root) {
    console.log("Bumped into a null node.")
    return 0;
  }

  let count = 0;

  if (root.data >= largest) {
    console.log(`Found a visible node at ${root.data}`);
    largest = root.data;
    count ++;
  } else {
    console.log(`Traversing through ${root.data}`)
  }

  count = count + countVisible(root.left, largest) + countVisible(root.right, largest);
  return count;
}

console.log()
console.log(countVisible(exampleTree.root));