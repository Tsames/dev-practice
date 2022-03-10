//Implement a Singly Linked List

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node.next) {
      count ++;
      node = node.next
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (node) {
      while (node.next) {
        node = node.next;
      }
    }
    return node;
  }
}

//Create some Nodes
const node1 = new Node(4);
const node2 = new Node(5);
node1.next = node2;

//Create our Singly Linked List
const list1 = new linkedList(node1);

console.log(list1.head.next.data);
console.log(list1.getLast());
