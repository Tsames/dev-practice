//Implement a Singly Linked List

// ---  Individual Node Class  ---
class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

// ---  Linked List Class  ---
class LinkedList {
  constructor(head=null) {
    this.head = head;
  }

  read(node = this.head) {
    console.log("Iterating through linked list:")
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

  //Helper function for mergeSort
  findMiddle(node) {
    let slow = node;
    let fast = node.next;

    while (fast != null && fast.data != null && fast.next != null) {
      // console.log(`Slow is ${slow.data} and fast is ${fast.data}`);
      slow = slow.next;
      fast = fast.next.next;
    }

    // console.log(`Fast reached null. Returning slow @ ${slow.data}`);
    return slow;
  }

  //Helper function for mergeSort
  merge(nodeA, nodeB) {
    //Declare 
    let listC = null;
    let pointerC = null;

    //While both nodes lists are not exhausted
    while (nodeA != null && nodeB != null) {
      if (nodeA.data <= nodeB.data) {
        if (listC === null) {
          listC = nodeA;
          pointerC = nodeA;
          nodeA = nodeA.next;
        } else {
          pointerC.next = nodeA;
          pointerC = nodeA;
          nodeA = nodeA.next;
        }
      } else {
        if (listC === null) {
          listC = nodeB;
          pointerC = nodeB;
          nodeB = nodeB.next;
        } else {
          pointerC.next = nodeB;
          pointerC = nodeB;
          nodeB = nodeB.next;
        }
      }
      console.log(`Adding ${pointerC.data} to merged list`);
    }

    //While one of the lists is exhausted but the other is not
    while (nodeA != null) {
      pointerC.next = nodeA;
      pointerC = nodeA;
      nodeA = nodeA.next;
      console.log(`Adding ${pointerC.data} to merged list`);
    }

    while (nodeB != null) {
      pointerC.next = nodeB;
      pointerC = nodeB;      
      nodeB = nodeB.next;
      console.log(`Adding ${pointerC.data} to merged list`);
    }

    //Return our newly sorted List
    return listC
  }

  mergeSort(leftStart = this.head) {
    //Base Case
    if (leftStart.next === null) {
      return leftStart;
    }

    //Seperate the existing list into two lists
    let leftEnd = this.findMiddle(leftStart);
    let rightStart = leftEnd.next;
    leftEnd.next = null;
    console.log(`New lists from ${leftStart.data} - ${leftEnd.data} and ${rightStart.data} - null.`)

    //Recursive call on the start of the two lists
    let listA = this.mergeSort(leftStart);
    let listB = this.mergeSort(rightStart)

    return this.merge(listA, listB);
  }
  
  sort() {
    this.head = this.mergeSort();
  }
}

//Create some Nodes
const node1 = new Node(8);
const node2 = new Node(7);
const node3 = new Node(6);
const node4 = new Node(5);
const node5 = new Node(4);

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
list1.sort();



//Print List after methods
list1.read();

// const leftNode = list1.head;
// const leftEnd = list1.findMiddle(leftNode);
// const rightNode = leftEnd.next;
// leftEnd.next = null;

// console.log("Left List:")
// list1.read(leftNode);

// console.log("Right List:")
// list1.read(rightNode);

// const mergedNode = list1.merge(leftNode, rightNode);
// list1.read(mergedNode);

