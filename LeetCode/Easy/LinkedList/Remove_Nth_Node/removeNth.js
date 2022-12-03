//Import Linked List Data Structure
const linkedList = require('../../../../Data_Structures/Linked_Lists/SinglyLinkedList');

const newList = new linkedList.SinglyLinkedList([1,2,3,4,5]);

const removeNth = (list, n) => {

    //Declare Pointer
    let pointer = list.getNode(1);

    //Find the end of the Linked List using Pointer
    while(pointer.next) {
        pointer.next.prev = pointer;
        pointer = pointer.next;
    }

    //Find the nth from the last node (n=1 being the last node)
    for (let i=1; i < n; i++) {
        pointer = pointer.prev
    }

    //If any node but head node is selected, remove it from the Linked List
    if (pointer.prev) {

        let temp = pointer.next;
        pointer = pointer.prev;
        pointer.next = temp;


    //Else we are removing the head node
    } else {

        //If there is another node in the list - set the next node in line to be the head
        if (pointer.next) {

            pointer = pointer.next;
            pointer.prev = null;
            list.head = pointer;

        //If the head is the only node in the list
        } else {

            list.head = null;
            return null

        }
    }

    return pointer.data

}

module.exports = removeNth