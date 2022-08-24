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
    let output = "";

    //Loop through the LinkedList
    for (let i=0; node; i++) {
      if (i=0) {
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
    }
  }

  // ------------------------ Remove the nth node and return it ------------------------ 
  removeAt(n) {
    //If there is no head return null
    if (!this.head) return null;

    //Get the n-1 th node (and then easily get the nth node)
    const nodeBefore = this.getNode(n-1);
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
      const newHead = new SinglyLinkedListNode(data);
      this.head = newHead;
    }

    //Otherwise there must be at least one node - so get either the nth node or the tail node
    const nodeBefore = this.getNode(n);

    const newNode = new SinglyLinkedListNode(data, nodeBefore.next);
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

  //---- Finds the middle node of the list (if even number of nodes, returns the smaller of the two) ----
  findMiddle(slow = this.head) {
    if (!slow) return null;

    let fast = slow.next;

    while(fast && fast.data && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  //---- Sorts the nodes in ascending order (with the help of helpers) ----
  sort() {
    this.head = this.#mergeSort();
  }

  // ------------------------ Recursive Merge Sort (Returns a single node) ------------------------ 
  #mergeSort(leftHead = this.head) {

    //Base Case - If the list head is just a single node, then return it.
    if (!leftHead.next) return leftHead;

    //Else Divide the list into two segments - use findMiddle to find the leftEnd. Then use .next property to find the rightHead (don't need to know right end).
    let leftEnd = this.findMiddle(leftHead);
    let rightHead = leftEnd.next;
    leftEnd.next = null;

    //Recursive calls on each segment
    console.log(`Recursive calls on [${leftHead.data} - ${leftEnd.data}] and [${rightHead.data} - end].`)
    let leftList = this.#mergeSort(leftHead);
    let rightList = this.#mergeSort(rightHead);

    //Reconstruct them in order by calling our helper
    return this.#merge(leftList, rightList);
  }

  // ------------------------ Recursive Merge Sort Helper ------------------------
  #merge(leftHead, rightHead) {
    //Helper variables
    let newListHead = new SinglyLinkedListNode(null);
    let currentNode = newListHead;

    //leftHead and rightHead are not null
    while (leftHead && rightHead) {
      //leftHead is smaller - Assign leftHead to the currentNode's next property, then make it the new currentNode, then finally replace leftHead with leftHead's next node.
      if (leftHead.data <= rightHead.data) {
        currentNode.next = leftHead;
        currentNode = leftHead
        leftHead = leftHead.next;
      } else {
        //rightHead is smaller - Same process as above but with the righthead
        currentNode.next = rightHead;
        currentNode = rightHead
        rightHead = rightHead.next;
      }
    }

    //leftHead has elements but right list does not
    while (leftHead && !rightHead) {
      currentNode.next = leftHead;
      currentNode = leftHead
      leftHead = leftHead.next;
    }

    //rightHead has elements but left list does not
    while (rightHead && !leftHead) {
      currentNode.next = rightHead;
      currentNode = rightHead
      rightHead = rightHead.next;
    }

    //Both lists have no elements - so return
    console.log('Returning new merged list:');
    this.print(newListHead.next);
    return newListHead.next
  }

}

// const normalList = new SinglyLinkedList([1,6,5,4,3,2]);
// normalList.print();
// console.log(normalList.sort());
// normalList.print();



module.exports = { SinglyLinkedListNode, SinglyLinkedList }