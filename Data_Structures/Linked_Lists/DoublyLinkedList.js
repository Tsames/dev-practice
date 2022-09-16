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
    if (Array.isArray(nodes)) {
      nodes.forEach((node) => {
        this.append(node);
      })
    } else {
      this.append(nodes);
    }
  }

  // ------------------------ Print LL ------------------------ 
  print(reverse = false, node = this.head) {
    let output = "";

    if (!reverse) {
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
      node = this.getLastNode(node);
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
    if (!node) return null;

    for (let i = 1; i < n && node.next !== null; i++) {
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
      newNode.prev = lastNode;
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
  removeAt(n, node = this.head) {
    //If there is no head - return null
    if (!node) return null;

    //Get the nth node
    const nthNode = this.getNode(n, node);

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
  insert(n, data, node = this.head) {

    if (!node) return null

    //If there is not an existing head, make a head regardless of the n argument
    if (!this.head) {
      const newHead = new DoublyLinkedListNode(data);
      this.head = newHead;
    }

    //Otherwise there must be at least one node - so get either the nth node or the tail node
    const nodeBefore = this.getNode(n, node);
    const nodeAfter = nodeBefore.next;

    //Create newNode and set the prev and next properties of the surrounding nodes to accommodate the addition
    const newNode = new DoublyLinkedListNode(data, nodeBefore, nodeAfter);
    if (nodeAfter) nodeAfter.prev = newNode;
    nodeBefore.next = newNode;
  }

  // ------------------------ Search nodes for data -> O(n) ------------------------ 
  search(targetData, node = this.head) {
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
  findMiddle(slow = this.head) {
    if (!slow) return null;

    let fast = slow.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  //---- Sorts the nodes in ascending order ----
  sort() {
    this.head = this.mergeSort();
    this.print();
  }

  //Recursive Merge Sort Engine
  mergeSort(leftHead = this.head) {

    //BASE CASE: If list has only a single node or no nodes, return the list
    if (!leftHead || !leftHead.next) {
      return leftHead;
    }

    /* If its not the base case, then there must be atleast two nodes.
    Find the middle node of the list and from there make two lists. */
    let leftEnd = this.findMiddle(leftHead);
    let rightHead = leftEnd.next;
    leftEnd.next = null;
    rightHead.prev = null;

    //Save a recursive call on each list to a variable
    const leftList = this.mergeSort(leftHead);
    const rightList = this.mergeSort(rightHead);

    //return the result of merge() of the two variables
    return this.merge(leftList, rightList);
  }

  //Merge Sort Helper Function
  merge(leftHead, rightHead) {

    //Intialize Output List
    let output = new DoublyLinkedListNode(null, null, null);
    let pointer = output;

    let leftPtr = leftHead;
    let rightPtr = rightHead;

    /* While the leftList and rightList still have nodes, compare them and add the
    smaller of the two to the output list */
    while (leftPtr && rightPtr) {
      if (leftPtr.data <= rightPtr.data) {
        pointer.next = leftPtr;
        leftPtr.prev = pointer;
        pointer = leftPtr;
        leftPtr = leftPtr.next
      } else {
        pointer.next = rightPtr;
        rightPtr.prev = pointer
        pointer = rightPtr;
        rightPtr = rightPtr.next;
      }
    }

    //While the leftList still has nodes, add them in order to the output list
    while (leftPtr) {
      pointer.next = leftPtr;
      leftPtr.prev = pointer;
      pointer = leftPtr;
      leftPtr = leftPtr.next
    }

    //While the rightList still has nodes, add them in order to the output list
    while (rightPtr) {
      pointer.next = rightPtr;
      rightPtr.prev = pointer
      pointer = rightPtr;
      rightPtr = rightPtr.next;
    }

    //Remove the head of the output list and return it.
    let realOutput = output.next;
    realOutput.prev = null;
    output.next = null;
    return realOutput;
  }

}

module.exports = { DoublyLinkedListNode, DoublyLinkedList }