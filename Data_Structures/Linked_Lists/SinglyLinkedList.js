// ---%*%*%*%*%*%*%*%*%%***%*%*%--- SINGLY LINKED LIST NODE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class SinglyLinkedListNode {
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
  print(node = this.head) {
    if (!node) return null;
    let output = `${node.data}`;
    node = node.next;

    //Loop through the LinkedList
    while (node) {
      output = output + ` => ${node.data}`
      node = node.next;
    }

    console.log(output);
  }

  // ------------------------ Get the total number of nodes in the LL ------------------------ 
  getSize(node = this.head) {
    let count = 0;

    //Loop as long as the current node is not null
    while (node) {
      count ++
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

    for (let i=1; i < n && node.next != null; i++) {
      node = node.next;
    }

    return node;
  }

  // ------------------------ Add to front of LL ------------------------ 
  prepend(data) {
    const newNode = new SinglyLinkedListNode(data, this.head);
    this.head = newNode;
  }

  // ------------------------ Add to end of LL ------------------------ 
  append(data) {
    //Create a new node from the passed data
    const newNode = new SinglyLinkedListNode(data);

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
  pop(node = this.head) {

    //If there is no head node - throw an error
    if (!node) {

      throw new Error('List is empty!');

    //If there is only one node and it is THE head node - call this.removeHead()
    } else if (node && node === this.head && !node.next) {

      return this.removeHead()

    // If there is only one node and it is not THE head node = call this.removeHead(node)
    } else if (node && !node.next) {

        return this.removeHead(node);

    //Else the list has atleast two nodes in it
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
  removeHead(node = this.head) {

    //If head exists then set the new head to its next property, else return
    if (node && node === this.head) {
      this.head = this.head.next;
      return node;
    } else if (node) {
      const prevNode = this.search(node.data, this.head, true);
      prevNode.next = node.next;
      return node
    }
  }

  // ------------------------ Remove the nth node and return it ------------------------ 
  removeAt(n, node = this.head) {
    //If there is no head return null
    if (!node) return null;

    //Get the n-1 th node (and then easily get the nth node)
    const nodeBefore = this.getNode(n-1, node);
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
  insert(n, data, node = this.head) {

    //If there is not an existing head, make a head regardless of the n argument
    if (!node && node === this.head) {
      const newHead = new SinglyLinkedListNode(data);
      this.head = newHead;
    } else if (!node) {
      throw new Error('Passed node was not a node!');
    }

    //Otherwise there must be at least one node - so get either the nth node or the tail node
    const nodeBefore = this.getNode(n, node);

    const newNode = new SinglyLinkedListNode(data, nodeBefore.next);
    nodeBefore.next = newNode;
  }

  // ------------------------ Search nodes for data -> O(n) ------------------------ 
  search(targetData, node = this.head) {
    if (!node) return null;
    
    let prevNode = null;

    while (node) {
      if (node.data === targetData) {
        if (before) return prevNode;
        return node;
      } else {
        prevNode = node;
        node = node.next;
      }
    }

    if (before) return prevNode;
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

  //---- Sorts the nodes in ascending order (with the help of helpers) ----
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

    //Save a recursive call on each list to a variable
    const leftList = this.mergeSort(leftHead);
    const rightList = this.mergeSort(rightHead);

    //return the result of merge() of the two variables
    return this.merge(leftList, rightList);
  }

  //Merge Sort Helper Function
  merge(leftHead, rightHead) {

    //Intialize Output List
    let output = new SinglyLinkedListNode(null, null);
    let pointer = output;

    let leftPtr = leftHead;
    let rightPtr = rightHead;

    /* While the leftList and rightList still have nodes, compare them and add the
    smaller of the two to the output list */
    while (leftPtr !== null && rightPtr !== null) {
      if (leftPtr.data <= rightPtr.data) {
        pointer.next = leftPtr;
        pointer = leftPtr;
        leftPtr = leftPtr.next
      } else {
        pointer.next = rightPtr;
        pointer = rightPtr;
        rightPtr = rightPtr.next;
      }
    }

    //While the leftList still has nodes, add them in order to the output list
    while (leftPtr !== null) {
      pointer.next = leftPtr;
      pointer = leftPtr;
      leftPtr = leftPtr.next;
    }

    //While the rightList still has nodes, add them in order to the output list
    while (rightPtr !== null) {
      pointer.next = rightPtr;
      pointer = rightPtr;
      rightPtr = rightPtr.next;
    }

    //Remove the head of the output list and return it.
    let realOutput = output.next;
    output.next = null;
    return realOutput;
  }

}

module.exports = { SinglyLinkedListNode, SinglyLinkedList }