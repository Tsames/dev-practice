const reverseList = require('./reverseList');
const linkedlist = require('../../../../Data_Structures/Linked_Lists/SinglyLinkedList');

const listOne = new linkedlist.SinglyLinkedList([1,2,3,4,5]);
const headOne = listOne.getNode(1);

const listTwo = new linkedlist.SinglyLinkedList([1,2]);
const headTwo = listTwo.getNode(1);

const listThree = new linkedlist.SinglyLinkedList([]);
const headThree = listTwo.getNode(1);

test('Testing LeetCode example One: [1,2,3,4,5], should return [5,4,3,2,1]', () => {
    //Example 1
    expect(listOne.print(reverseList(headOne))).toEqual('5 -> 4 -> 3 -> 2 -> 1')
})

test('Testing LeetCode example Two: [1,2], should return [2,1]', () => {
    //Example 2
    expect(listTwo.print(reverseList(headTwo))).toEqual('2 -> 1')
})

test('Testing LeetCode example Three: [], should return []', () => {
    //Example 3
    expect(listThree.print(reverseList(headThree))).toEqual('')
})