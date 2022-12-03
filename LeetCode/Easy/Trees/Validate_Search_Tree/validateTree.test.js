const validateTree = require('./validateTree');
const binaryTree = require('../../../../Data_Structures/Trees/binaryTree');

const exampleTreeOne = new binaryTree.BinarySearchTree([120,70,140,50,100,130,160,20,75,85,110,121,135,150,200]);
const exampleTreeTwo = new binaryTree.BinarySearchTree([120,70,140,50,100,130,160,20,55,65,110,121,135,150,200]);
const exampleTreeThree = new binaryTree.BinarySearchTree([120,70,140,50,100,130,160,20,55,75,121,122,135,150,200]);
const exampleTreeFour = new binaryTree.BinarySearchTree([120,70,140,50,100,130,160,20,55,75,110,119,135,150,200]);
const exampleTreeFive = new binaryTree.BinarySearchTree([120,70,140,50,100,130,160,20,55,75,110,119,145,150,200]);
const exampleTreeSix = new binaryTree.BinarySearchTree([120,70,140,50,100,130,160,20,55,75,110,119,135,139,200]);
const exampleTreeSeven = new binaryTree.BinarySearchTree([120,70,140,50,100,130,160,20,55,75,110,125,135,150,200]);

test('Example 1 (node 85 is incorrect)', () => {
    expect(validateTree(exampleTreeOne.root)).toEqual(false);
})

test('Example 2 (node 65 is incorrect)', () => {
    expect(validateTree(exampleTreeTwo.root)).toEqual(false);
})

test('Example 3 (node 121 is incorrect)', () => {
    expect(validateTree(exampleTreeThree.root)).toEqual(false);
})

test('Example 4 (node 119 is incorrect)', () => {
    expect(validateTree(exampleTreeFour.root)).toEqual(false);
})

test('Example 5 (node 145 is incorrect)', () => {
    expect(validateTree(exampleTreeFive.root)).toEqual(false);
})

test('Example 6 (node 139 is incorrect)', () => {
    expect(validateTree(exampleTreeSix.root)).toEqual(false);
})

test('Example 7 should be correct', () => {
    expect(validateTree(exampleTreeSeven.root)).toEqual(true);
})