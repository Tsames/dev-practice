class Node {
  constructor(key, value, next=null) {
    this.data = [key, value];
    this.next = next;
  }
  get key() {
    return this.data[0];
  }
  get value() {
    return this.data[1];
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  add(key, value) {
    // create a new Node with key value
    const newNode = new Node(key, value);
    //Check to see where to put the new node
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    //If there is no head make the new node the head. Otherwise put the new node at the end of the linked list
    node === null ? this.head = newNode : node.next = newNode;
  }

  delete(key) {
    // search the list for a node whose data has a key that matches the key parameter
    // remove it from the list and return it
    // if no such node exists, return false
    let node = this.head;
    while (node) {
      if (node.key === key) {
        
      }
    }

  }

  search(key) {
    let node = this.head;
    while (node) {
      if (node.key === key) {
        return node
      }
    }
    return false;
  }
}

class HashTable {
  constructor(size) {
    // initialize table size - prime number size is recommended to avoid clustering
    // intialize the table to have "size" number of elements, set to null
    // the table will be an array named "table"
  }

  hash(key) {
    // calculate and return an integer value based key, like in the lesson
    // remember, if you are using modulus, it is recommended to use a prime number to avoid clustering
  }

  insert(key, value) {
    // hash the key to get an integer index

    // if there's no linked list at that index in the table 
    // create one and add it
    // and insert this key value pair into the new Linked list

    // if there's a linked list at that index
    // if a node already exists with the key, update it the data in that node to store the new value

    // otherwise
    // add a new node with the given value to the end of the linked list

    // for the convenience of the user, you might wish to return the node, or you can just return true
  }

  delete(key) {
    // lookup the key (i.e. hash it to get an index)
    // if the key is, in fact, in the linked list, delete that Node and return it
    // if the key wasn't found return -1
  }

  search(key) {
    // hash key to get index
    // search the linked list at the index
    // if the key is found, return the Node
    // if not, return -1
  }

}