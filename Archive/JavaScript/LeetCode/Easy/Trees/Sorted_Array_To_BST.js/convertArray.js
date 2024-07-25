/* 

Given an integer array nums where the elements are sorted in ascending order, 
convert it to a height-balanced binary search tree.

*/
const treeNode = require('../../../../Data_Structures/Trees/binaryTree').Node;
const tree = require('../../../../Data_Structures/Trees/binaryTree').BinarySearchTree;

function convertArray(nodeArray) {

  //If the array is empty return null
  if (nodeArray.length === 0) return null;

  //Otherwise create a node from the element @ the middle index
  let middle = 0;
  if (nodeArray.length >= 1) middle = (nodeArray.length - 1) / 2;
  const newNode = new treeNode(nodeArray[middle]);

  /* If there are atleast 2 elements in the current array, then there can be a left subtree of the current node
  because the node selected in the middle will select the rightmost element if there are an even number of elements in the array.
  Since the array is sorted this means the larger of two numbers in the middle of the array will be selected.
  Thus, if there are only two elements in the current recursive call, then there will only be a left subtree. 
  */
  if (nodeArray.length >= 2) {
    const left = nodeArray.slice(0, middle);
    newNode.left = convertArray(left);
  }

  /* Following the logic above, there can only be a right subtree if there are 3 or more elements
  in this recursive call's array. */

  if (nodeArray.length >= 3) {
    const right = nodeArray.slice(middle + 1);
    newNode.right = convertArray(right);
  }

  //Return the created node
  return newNode;

}

// const testConvert = convertArray([3, 5, 7, 10, 12, 15, 19]);

// const testTree = new tree ();
// testTree.root = testConvert;
// testTree.prettyPrint()
// console.log(testTree.convertToArray());

module.exports = convertArray