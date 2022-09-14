// ---%*%*%*%*%*%*%*%*%%***%*%*%--- DOUBLY LINKED LIST NODE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class DoublyLinkedListNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev
    this.next = next;
  }
}

// ---%*%*%*%*%*%*%*%*%%***%*%*%--- DOUBLY LINKED LIST CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class DoublyLinkedList {

  constructor(nodes = []) {
    nodes.forEach((node) => {
      this.append(node);
    })
  }

  // ------------------------ Print LL ------------------------ 
  print(reverse = false) {
    let output = "";

    if (!reverse) {
      let node = this.head;
      //Loop forward through the LinkedList
      while (node) {
        if (node === this.head) {
          output = output + `${node.data} `
        } else {
          output = output + `<-> ${node.data} `
        }
        node = node.next;
      }
    } else {
      let node = this.getLastNode();
      //Loop backwards through the LinkedList
      while (node) {
        if (node === this.getLastNode()) {
          output = output + `${node.data} `
        } else {
          output = output + `<-> ${node.data} `
        }
        node = node.prev;
      }
    }

    console.log(output);
  }

  // ------------------------ Get the total number of nodes in the LL ------------------------ 
  getSize() {
    let count = 0;
    let node = this.head;

    //Loop as long as the current node is not null
    while (node) {
      count++
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

    for (let i = 1; i < n && node.next != null; i++) {
      node = node.next;
    }

    return node;
  }

  // ------------------------ Add to front of LL ------------------------ 
  prepend(data) {
    const newNode = new DoublyLinkedListNode(data, null, this.head);
    this.head.prev = newNode;
    this.head = newNode;
  }

  // ------------------------ Add to end of LL ------------------------ 
  append(data) {
    //Create a new node from the passed data
    const newNode = new DoublyLinkedListNode(data);

    //Get the last node
    const lastNode = this.getLastNode();

    //If the head is empty set head - otherwise set next of the last node
    if (!lastNode) {
      this.head = newNode;
    } else {
      lastNode.next = newNode;
      newNode.prev = lastNode
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

      while (node.next) {
        node = node.next;
      }


      const newTail = node.prev;
      newTail.next = null;
      return node;
    }
  }

  // ------------------------ Remove first node and return it ------------------------ 
  removeHead() {
    const node = this.head;

    //If head exists then set the new head to its next property, else return
    if (node) {
      this.head = this.head.next;
      this.head.prev = null
      return node;
    }
  }

  // ------------------------ Remove the nth node and return it ------------------------ 
  removeAt(n) {
    //If there is no head - return null
    if (!this.head) return null;

    //Get the nth node
    const nthNode = this.getNode(n);

    //If the nthNode is the head node (getNode gets the nth node OR the last node in the list if n > list length)
    if (nthNode === this.head) {
      this.head = null;

    //If the nth node exists and is not the head node
    } else if (nthNode) {
      let nodeBefore = nthNode.prev;
      let nodeAfter = nthNode.next;

      //If the n+1th node exists
      if (nodeAfter) {
        nodeBefore.next = nodeAfter;
        nodeAfter.prev = nodeBefore;
      //Then there must be a n-1th node but no n+1th node (since there must at least be a head node)
      } else {
        nodeBefore.next = null;
      }
    }

    return nthNode;
  }

  // ------------------------ Insert after node n ------------------------ 
  insert(n, data) {

    //If there is not an existing head, make a head regardless of the n argument
    if (!this.head) {
      const newHead = new DoublyLinkedListNode(data);
      this.head = newHead;
    }

    //Otherwise there must be at least one node - so get either the nth node or the tail node
    const nodeBefore = this.getNode(n);
    const nodeAfter = nodeBefore.next;

    //Create newNode and set the prev and next properties of the surrounding nodes to accommodate the addition
    const newNode = new DoublyLinkedListNode(data, nodeBefore, nodeAfter);
    if (nodeAfter) nodeAfter.prev = newNode;
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

const emptyList = new DoublyLinkedList([1,2,3,4,5,6,7]);
console.log("--------- test -------------")
emptyList.print(true);
emptyList.print();
console.log(emptyList.findMiddle());


module.exports = { DoublyLinkedListNode, DoublyLinkedList }