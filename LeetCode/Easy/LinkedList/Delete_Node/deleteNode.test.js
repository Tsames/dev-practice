const deleteNode = require('./deleteNode');
const linkedlist = require('../../../../Data_Structures/Linked_Lists/SinglyLinkedList');

const listOne = new linkedlist.SinglyLinkedList([4,5,1,9]);
const exampleNodeOne = listOne.getNode(3);

const listTwo = new linkedlist.SinglyLinkedList([7,5,2,1,9,6,4,3]);
const exampleNodeTwo = listTwo.getNode(5);

//These Test are for the Third Version of twoSums.js where it is expected that the given array is sorted.

test('Testing LeetCode example One: [4,5,1,9], remove node 1', () => {
    //Example 1
    expect(deleteNode(listOne, exampleNodeOne)).toEqual(9)
})

test('Testing LeetCode example Two: [7,5,2,1,9,6,4,3], remove node 9', () => {
    //Example 2
    expect(deleteNode(listTwo, exampleNodeTwo)).toEqual(6)
})