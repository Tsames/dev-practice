/* Given the head of a singly linked list, reverse the list, and return the reversed list. */

//Import Linked List Data Structure
const linkedlist = require('../../../../Data_Structures/Linked_Lists/SinglyLinkedList');

const newList = new linkedlist.SinglyLinkedList([1,2,3,4,5]);
const newListHead = newList.getNode(1);

const reverseList = (head) => {

    let pointerA = head;
    let pointerB = null;

    while (pointerA) {

        let temp = pointerA.next;

        pointerA.next = pointerB;
        pointerB = pointerA;
        pointerA = temp;

    }

    return pointerB;

}

exports.module = reverseList