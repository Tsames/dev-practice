/* 

Given an integer array nums where the elements are sorted in ascending order, 
convert it to a height-balanced binary search tree.

*/
const treeNode = require('../../../../Data_Structures/Trees/binaryTree').Node;
const tree = require('../../../../Data_Structures/Trees/binaryTree').BinarySearchTree;

function convertArray(nodeArray) {

  //If the array is empty return null
  if (nodeArray.length === 0) return;

  //Otherwise create a node from the element @ the middle index
  let middle = 0;
  if (nodeArray.length > 1) middle = (nodeArray.length - 1) / 2;
  const newNode = new treeNode(nodeArray[middle]);

  //Create a left and right subarray that does not include the index used
  if (nodeArray.length)
  const left = nodeArray.slice(0, middle);
  const right = nodeArray.slice(middle + 1);

  //Recursive call to create left and right nodes
  newNode.left = convertArray(left);
  newNode.right = convertArray(right);

  //Return the created node
  return newNode;

}

const testConvert = convertArray([3, 5, 7, 10, 12, 15, 19]);

const testTree = new tree ();
testTree.root = testConvert;
testTree.prettyPrint()
// console.log(testTree.convertToArray());

module.exports = convertArray