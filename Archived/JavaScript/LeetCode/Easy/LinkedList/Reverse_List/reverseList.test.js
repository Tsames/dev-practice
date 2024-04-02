const reverseList = require('./reverseList');
const linkedlist = require('../../../../Data_Structures/Linked_Lists/SinglyLinkedList');

const listOne = new linkedlist.SinglyLinkedList([1,2,3,4,5]);
const headOne = listOne.getNode(1);
const listOneEnd = listOne.getNode(5);

const listTwo = new linkedlist.SinglyLinkedList([1,2]);
const headTwo = listTwo.getNode(1);
const listTwoEnd = listOne.getNode(2);

const listThree = new linkedlist.SinglyLinkedList([]);
const headThree = listThree.getNode(1);

test('Testing LeetCode example One: [1,2,3,4,5], should return [5,4,3,2,1]', () => {
    //Example 1
    expect(reverseList(headOne)).toEqual(listOneEnd)
})

test('Testing LeetCode example Two: [1,2], should return [2,1]', () => {
    //Example 2
    expect(reverseList(headTwo)).toEqual(listTwoEnd)
})

test('Testing LeetCode example Three: [], should return []', () => {
    //Example 3
    expect(reverseList(headThree)).toEqual(null)
})