const removeNth = require('./removeNth');
const linkedList = require('../../../../Data_Structures/Linked_Lists/SinglyLinkedList');

const listOne = new linkedList.SinglyLinkedList([1,2,3,4,5]);
const listTwo = new linkedList.SinglyLinkedList([1]);
const listThree = new linkedList.SinglyLinkedList([1,2]);

test('Testing LeetCode example One', () => {
    //Example 1
    expect(removeNth(listOne, 2)).toEqual(3)
})

test('Testing LeetCode example Two', () => {
    //Example 2
    expect(removeNth(listTwo, 1)).toEqual(null)
})

test('Testing LeetCode example Three', () => {
    //Example 3 
    expect(removeNth(listThree, 1)).toEqual(1)
})