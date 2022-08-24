// ---%*%*%*%*%*%*%*%*%%***%*%*%--- SINGLY LINKED LIST NODE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class DoublyLinkedListNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev
    this.next = next;
  }
}

// ---%*%*%*%*%*%*%*%*%%***%*%*%--- SINGLY LINKED LIST CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class DoublyLinkedList {

  constructor(nodes = []) {
    nodes.forEach((node) => {
      this.append(node);
    })
  }

  // ------------------------ Print DLL ------------------------ 
  print(node = this.head) {
    let output = "";

    //Loop through the LinkedList
    for (let i=0; node; i++) {
      if (i === 0) {
        output = output + `${node.data} `
      } else {
        output = output + `<-> ${node.data} `
      }
      node = node.next;
    }

    console.log(output);
  }

  // ------------------------ Get the total number of nodes in the DLL ------------------------ 
  getSize(node = this.head) {
    let count = 0;

    //Loop as long as the current node is not null
    while (node) {
      count++
      node = node.next;
    }

    return count;
  }

  // ------------------------ Get the last node ------------------------ 
  getLastNode(node = this.head) {

    //As long as there is a head node - loop through the list until you find the tail
    if (node) {
      while (node.next) {
        node = node.next;
      }
    }

    return node;
  }

  // ------------------------ Get the nth node ------------------------ 
  getNode(n, node = this.head) {

    for (let i = 1; i < n && node.next; i++) {
      node = node.next;
    }

    return node;
  }

  // ------------------------ Add to front of LL ------------------------ 
  prepend(data) {
    const newNode = new LinkedListNode(data, null, this.head);
    this.head = newNode;
  }

  // ------------------------ Add to end of LL ------------------------ 
  append(data) {
    //Get the last node
    const lastNode = this.getLastNode();

    //If the head is empty set head - otherwise set next of the last node
    if (!lastNode) {
      const newNode = new DoublyLinkedListNode(data, null, null);
      this.head = newNode;
    } else {
      const newNode = new DoublyLinkedListNode(data, lastNode, null);
      lastNode.next = newNode;
    }
  }

  // ------------------------ Remove last node and return it ------------------------ 
  pop() {
    let node = this.head;

    //If there is no head node - throw an error
    if (!node) {

      throw new Error('List is empty!');

      //If there is only a head node - set the head to null and return the head
    } else if (node && !node.next) {

      const tail = this.head;
      this.head = null;
      return tail

      //Else the list has atleast two nodes in it
    } else {

      while (node.next.next) {
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
    }
  }

  // ------------------------ Remove the nth node and return it ------------------------ 
  removeAt(n) {
    //If there is no head return null
    if (!this.head) return null;

    //Get the n-1 th node (and then easily get the nth node)
    const nodeBefore = this.getNode(n - 1);
    const nthNode = nodeBefore.next;

    //If the nth node exists - set the n-1th node's next property to n+1th node
    if (nthNode) {
      nodeBefore.next = nthNode.next;
      return nthNode;
    } else {
      return null;
    }
  }

  // ------------------------ Insert after node n ------------------------ 
  insert(n, data) {

    //If there is not an existing head, make a head regardless of the n argument
    if (!this.head) {
      const newHead = new LinkedListNode(data);
      this.head = newHead;
    }

    //Otherwise there must be at least one node - so get either the nth node or the tail node
    const nodeBefore = this.getNode(n);

    const newNode = new LinkedListNode(data, nodeBefore.next);
    nodeBefore.next = newNode;
  }

  // ------------------------ Search nodes for data -> O(n) ------------------------ 
  search(targetData) {
    let node = this.head

    if (!node) return null;

    while (node) {
      if (node.data === targetData) {
        return node;
      } else {
        node = node.next;
      }
    }

    return node;
  }

  //---- Finds the middle node of the list (if even number of nodes returns the smaller of the two) ----
  findMiddle() {
    let slow = this.head;
    if (!slow) return null;

    let fast = this.head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  //---- Sorts the nodes in ascending order ----
  sort() {

  }

}

const normalList = new DoublyLinkedList([1, 2, 3, 4, 5, 6]);
console.log("--------- Test List -------------")
normalList.print();



module.exports = { DoublyLinkedListNode, DoublyLinkedList }