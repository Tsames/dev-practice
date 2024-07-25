const maxDepth = require('./maxDepth');
const binaryTree = require('../../../../Data_Structures/Trees/binaryTree');

const exampleTreeOne = new binaryTree.BinarySearchTree([3, 9, 20, null, null, 15, 7]);
const exampleTreeTwo = new binaryTree.BinarySearchTree([1,null,2]);

test('Leetcode Example 1 [3,9,20,null,null,15,7], which should return 3', () => {
    //Example 1
    expect(maxDepth(exampleTreeOne.root)).toEqual(3);
})

test('Leetcode Example 2 [1,null,2], which should return 2', () => {
    //Example 1
    expect(maxDepth(exampleTreeTwo.root)).toEqual(2);
})