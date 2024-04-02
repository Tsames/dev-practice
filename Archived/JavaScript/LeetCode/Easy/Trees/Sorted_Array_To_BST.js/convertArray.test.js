const tree = require('../../../../Data_Structures/Trees/binaryTree').BinarySearchTree;
const convertArray = require('./convertArray');

const treeOne = new tree();
treeOne.root = convertArray([-10, -3, 0, 5, 9]);
const treeTwo = new tree();
treeTwo.root = convertArray([1, 3])

test('Leetcode Example 1 [-10, -3, 0, 5, 9], which should return [0, -3, 9, -10, 5]', () => {
  //Example 1
  expect(treeOne.convertToArray()).toEqual([0, -3, 9, -10, 5]);
})

test('Leetcode Example 2 [1,3], which should return [3, 1]', () => {
  //Example 1
  expect(treeOne.convertToArray()).toEqual([3, 1]);
})