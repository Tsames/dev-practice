//Implement a Singly Linked List

class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head
  }

  read() {
    console.log("Iterating through linked list:")
    let node = this.head;
    while (node) {
      console.log(`At Node ${node.data}.`)
      node = node.next
    }
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

  getLast() {
    let node = this.head;
    if (node) {
      while (node.next) {
        node = node.next;
      }
    }
    return node;
  }

  getNode(n) {
    let node = this.head;
    for (let i = 0; i < n && node.next != null; i++) {
      node = node.next;
    }
    return node;
  }

  append(data) {
    const newNode = new Node(data);
    this.getLast().next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  pop() {
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    const tail = node.next;
    node.next = null;
    return tail;
  }

  removeFromFront() {
    const node = this.head;
    this.head = this.head.next
    return node;
  }

  insertAt(n, data) {
    const target = this.getNode(n);
    const newNode = new Node(data, target.next);
    target.next = newNode;
  }

  removeAt(n) {
    const size = this.size();
    let beforeTarget = null;
    if (n > size) {
      beforeTarget = this.getNode(size - 1);
    } else {
      beforeTarget = this.getNode(n - 1);
    }
    beforeTarget.next = beforeTarget.next.next;
  }

  search(term) {
    let node = this.head;
    let index = 0;
    while (node != null) {
      if (node.data === term) {
        return index;
      }
      node = node.next;
      index ++;
    }
    return false;
  }

  sort() {
    
  }
  
}

//Create some Nodes
const node1 = new Node(4);
const node2 = new Node(5);
const node3 = new Node(6);
const node4 = new Node(7);
const node5 = new Node(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

//Create our Singly Linked List
const list1 = new LinkedList(node1);

//---  Test Our Methods  ---

//Print List before methods
list1.read();

// -- Methods  --
// list1.append("a");
// list1.prepend("a");
// list1.pop();
// list1.removeFromFront();
// list1.insertAt(2,"a");
// list1.removeAt(2);
// console.log(list1.search(7));
// console.log(list1.search("not here"));


//Print List after methods
list1.read();




//   sort() {
//     // sort the Linked List in ascending order of data values
//   }
// }