// ---%*%*%*%*%*%*%*%*%%***%*%*%--- LINKED LIST NODE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---
class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// ---%*%*%*%*%*%*%*%*%%***%*%*%--- SINGLY LINKED LIST CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---
class SinglyLinkedList {

  constructor (nodes = []) {
    nodes.forEach((node) => {
      this.append(node);
    })
  }

  // ------------------------ Print LL ------------------------ 
  print() {
    let output = "";
    let node = this.head;

    //Loop through the LinkedList
    while (node) {
      if (node === this.head) {
        output = output + `${node.data} `
      } else {
        output = output + `-> ${node.data} `
      }
      node = node.next;
    }

    console.log(output);
  }

  // ------------------------ Get the total number of nodes in the LL ------------------------ 
  getSize() {
    let count = 0;
    let node = this.head;

    //Loop as long as the current node is not null
    while (node) {
      count ++
      node = node.next;
    }

    return count;
  }

  // ------------------------ Get the last node ------------------------ 
  getLastNode() {
    let node = this.head;

    //As long as there is a head node - loop through the list until you find the tail
    if (node) {
      while (node.next != null) {
        node = node.next;
      }
    }
    return node;
  }

  // ------------------------ Get the nth node ------------------------ 
  getNode(n) {
    let node = this.head;

    for (let i=1; i < n && node.next != null; i++) {
      node = node.next;
    }

    return node;
  }

  // ------------------------ Add to front of LL ------------------------ 
  prepend(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
  }

  // ------------------------ Add to end of LL ------------------------ 
  append(data) {
    //Create a new node from the passed data
    const newNode = new LinkedListNode(data);

    //Get the last node
    const lastNode = this.getLastNode();

    //If the head is empty set head - otherwise set next of the last node
    if (!lastNode) {
      this.head = newNode;
    } else {
      lastNode.next = newNode;
    }
  }

  // ------------------------ Remove last node and return it ------------------------ 
  pop() {
    let node = this.head;

    if (!node) {

      throw new Error('List is empty!');

    } else if (node && !node.next) {

      const tail = this.head;
      this.head = null;
      return tail

    } else {

      while(node.next.next) {
        node = node.next;
      }

      const tail = node.next;
      node.next = null;
      return tail;
    }
  }

  // ------------------------ Remove first node and return it ------------------------ 
  removeHead() {
    const node = this.head;

    //If head exists then set the new head to its next property, else return
    if (node) {
      this.head = this.head.next;
      return node;
    } else {
      return;
    }
  }

  // ------------------------ Remove the nth node and return it ------------------------ 
  removeAt(n) {
    if (!this.head) return null;

    //Get the n-1 th node (and then easily get the nth node)
    const nodeBefore = this.getNode(n-1);
    const nthNode = nodeBefore.next;

    //If the nth node exists - set the n-1th node's next property to n+1th node
    if (nthNode) {
      const nodeAfter = nthNode.next;
      nodeBefore.next = nodeAfter;
    } else {
      nodeBefore.next = null;
    }

    return nthNode;
  }

}

const emptyList = new SinglyLinkedList([]);
console.log("--------- empty list -------------")
emptyList.print();
console.log(emptyList.removeHead());

const singleList = new SinglyLinkedList([1]);
console.log("--------- single list -------------")
singleList.print();
console.log(singleList.removeHead());

const normalList = new SinglyLinkedList([1,2,3,4,5]);
console.log("--------- normal list -------------")
normalList.print();
console.log(normalList.removeHead());
normalList.print();



module.exports = { LinkedListNode, SinglyLinkedList }