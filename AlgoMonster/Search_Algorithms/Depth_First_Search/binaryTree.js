//Create a Node class for the Binary Tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {

  constructor() {
    this.root = null;
  }

  buildTree(dataArray) {
    dataArray.forEach((data) => this.insert(data));
  }

  insert(data) {
    //Create a new Node using the Node class
    const newNode = new Node(data);

    //If the current tree's root is empty insert the new node as the root.
    if (this.root === null) {
      this.root = newNode;

    //Else call the helper function
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    //Determine which side the newNode belongs on
    if (newNode.data < node.data) {

      /* If the left child is null replace it, otherwise run this function again with
      left child as the node */
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }

    } else {

      /* If the right child is null replace it, otherwise run this function again with
      right child as the node */
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {

    //Current Node is null
    if (node === null) {

      return null;

    //Target is less than current node
    } else if (key < node.data) {

      node.left = this.removeNode(node.left, key);
      return node;
    
    //Target is greater than current node
    } else if (key > node.data) {

      node.right = this.removeNode(node.right, key);
      return node;

    //Target is equal to current Node
    } else {

      //Delete a node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;

      //Delete a node with only a left child
      } else if (node.right === null) {
        node = node.left;
        return node;
      
      //Delete a node with only a right child
      } else if (node.left === null) {
        node = node.right;
        return node;

      //Delete a node with both a right and a left child
      } else {
        /* Find the right sub-tree's minimum node and replace the value of the node-to-be-deleted
        with it. Then use this function recursively to delete the node whose data you just used to replace
        the original node-to-be-deleted with. */
        let temp = this.findMinNode(node.right);
        node.data = temp.data;

        node.right = this.removeNode(node.right, temp.data);
        return node;
      }
    }
  }

  prettyPrint() {
    console.log("not yet")
  }
}


//Tests
const exampleTree = new BinaryTree();
exampleTree.buildTree([1,2,3]);

console.log(exampleTree.root.data);
console.log(exampleTree.root.left);
console.log(exampleTree.root.right);


module.exports = { Node, BinaryTree}