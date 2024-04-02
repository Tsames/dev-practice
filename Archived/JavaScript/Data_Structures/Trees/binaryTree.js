//Create a Node class for the Binary Tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//Binary Tree Class
class BinarySearchTree {

  constructor(data = null) {
    if (Array.isArray(data)) this.buildTree(data)
  }

  buildTree(dataArray) {
    dataArray.forEach((data) => this.insert(data));
  }

  insert(data) {

    //Create a new Node using the Node class
    const newNode = new Node(data);

    //If Root does not already exist, set it
    if (!this.root) {
      this.root = newNode;
      return;
    }

    //Else make a queue and a pointer
    const queue = [this.root]
    let current = null;

    //Iterate through each node of the queue
    while (queue.length > 0) {
      current = queue.shift();
      const found = this.insertHelper(current, newNode);

      if (found) return;

      queue.push(current.left);
      queue.push(current.right);

    }

  }

  insertHelper(node, newNode) {

    //Determine if there is an opening for the newNode
    if (node.left === null) {

      /* If the left child is null replace it with the newNode */
      node.left = newNode;
      return true;

    } else if (node.right === null){

      /* If the right child is null replace it with newNode */
      node.right = newNode;
      return true;
    }

    return false;

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

  convertToArray() {

    const output = [];
    const queue = [this.root];
    let node;

    while (queue.length > 0) {

      node = queue.shift();
      output.push(node.data);
      
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);

    }

    return output;
  }

  prettyPrint() {

    if (this.root === undefined) {
      console.log("Tree is empty.");
      return
    }

    /*

    Additional Data Structures:

    queue - Stores the nodes of the binaryTree that need to be printed. Each node is removed from the queue and its children are added when it is printed.
    parentQueue - Similar to queue except it stores the node data of the parent of the nodes to be printed.

    Helper Variables:

    output - stores a string that is printed to the console after every iteration of the parent while loop
    current - stores the data of the node that is being printed
    parent - stores the data of the parent of the node that is being printed
    levelCount - stores how many nodes need to printed from the queue on the next loop
    currentCount - counts how many children are added to the queue this iteration, then becomes levelCount on next iteration
    
    */
    const queue = [this.root];
    const parentQueue = ['root'];

    let output, current, parent, levelCount, currentCount = 1;

    while (queue.length > 0) {
      levelCount = currentCount;
      currentCount = 0;
      output = "";

      while (levelCount > 0) {
        current = queue.shift();
        parent = parentQueue.shift();

        if (current.left !== null) {
          queue.push(current.left);
          parentQueue.push(current.data);
          currentCount ++;
        }

        if (current.right !== null) {
          queue.push(current.right);
          parentQueue.push(current.data);
          currentCount++
        }

        output = output + `(${parent}) ${current.data} `;
        levelCount --;
      }

      console.log(output);
    }
  }
}


module.exports = { Node, BinarySearchTree }