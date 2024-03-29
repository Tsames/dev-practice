// ---%*%*%*%*%*%*%*%*%%***%*%*%--- BINARY SEARCH TREE NODE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

const convertArray = require("../../LeetCode/Easy/Trees/Sorted_Array_To_BST.js/convertArray");

class BinarySearchTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// ---%*%*%*%*%*%*%*%*%%***%*%*%--- BINARY SEARCH TREE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class BinarySearchTree {

  constructor(data = null) {
    this.insert(data);
  }

  // ------------------------ Insert new node(s) ------------------------

  insert(data) {
    //If the passed data is not in array format - convert it
    if (!Array.isArray(data)) data = [data];

    //If there is no root - make one
    if (!this.root) {
      //Create a new Node and insert it
      const newNode = new BinarySearchTreeNode(data.shift());
      this.root = newNode;
    }

    //Otherwise Loop through our array and call our recursive helper function
    data.forEach((element) => {
      const newNode = new BinarySearchTreeNode(element);
      this.insertNode(this.root, newNode)
    })
      
  }

  // ------------------------ Insert new node(s) helper ------------------------

  insertNode(node, newNode) {
    //Determine which side the newNode belongs on
    if (newNode.data < node.data) {

      /* If the left subtree is null replace it, otherwise run this function again with
      left subtree as the node */
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }

    } else {

      /* If the right subtree is null replace it, otherwise run this function again with
      right subtree as the node */
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // ------------------------ Find the node with the smallest number ------------------------

  findMinNode(node = this.root) {
    if (!node || !node.left) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // ------------------------ Find the node with the biggest number ------------------------

  findMaxNode(node = this.root) {
    if (!node || !node.right) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }

  // ------------------------ Find the depth of the deepest subtree ------------------------

  findMaxDepth(node = this.root) {
    //If the node is null
    if (!node) return 0;

    /* Since its max-depth we would return the the maximum of either left or right subtree.
    We add one to account for the current node that our recursive function is called on. */
    return 1 + Math.max(this.findMaxDepth(node.left), this.findMaxDepth(node.right));
  }

  // ------------------------ Remove node(s) ------------------------

  remove(data) {

    //If the passed data is not in array format - convert it
    if (!Array.isArray(data)) data = [data];

    data.forEach((element) => {
      this.root = this.removeNode(this.root, element);
    })
  }

  // ------------------------ Remove node(s) helper ------------------------

  removeNode(node, key) {

    //Current Node is null
    if (!node ) {

      return null;

    //Target is less than the data of the current node
    } else if (key < node.data) {

      node.left = this.removeNode(node.left, key);
      return node;
    
    //Target is greater than the data of the current node
    } else if (key > node.data) {

      node.right = this.removeNode(node.right, key);
      return node;

    //Target is equal to the data of the current Node
    } else {

      //Delete a node with no subtrees
      if (!node.left && !node.right) {
        node = null;
        return node;

      //Delete a node with only a left subtree
      } else if (!node.right) {
        node = node.left;
        return node;
      
      //Delete a node with only a right subtree
      } else if (!node.left) {
        node = node.right;
        return node;

      //Delete a node with both a right and a left subtree
      } else {
        /* Find the right subtree's minimum node and replace the value of the node-to-be-deleted
        with it. Then use this function recursively to delete the node whose data you just used to replace
        the original node-to-be-deleted with. */
        let temp = this.findMinNode(node.right);
        node.data = temp.data;

        node.right = this.removeNode(node.right, temp.data);
        return node;
      }
    }
  }

  // ------------------------ Count the number of nodes in the tree ------------------------

  count(node = this.root, count = 0) {
    if (!node) return 0;

    count += 1;

    if (node.left) count = this.count(node.left, count);
    if (node.right) count = this.count(node.right, count);

    return count;
  }

  // ------------------------ Search for a node with the target value ------------------------

  search(target, node = this.root) {
    //If node is null then return null
    if (!node) return null;

    //If node has the target data then return it
    if (node.data === target) return node;

    //If target is less than the node's data then run a recursive call on the left subtree, Otherwise return a recursive call on the right subtree
    if (node.data > target) return this.search(target, node.left);
    return this.search(target, node.right);
  }

  // ------------------------ Print each level of the tree (prints parent of the nodes in brackets on the same line) ------------------------

  print() {

    if (!this.root) {
      console.log("Tree is empty.");
      return
    }

    //Helper variables - two queue data structures, 3 temp variables, and 2 counters;
    const nodeQueue = [this.root];
    const parentNodeQueue = [];

    /* 
    output holds the string being printed. It holds one level of the tree at a time.
    current holds the node being visited in our loops.

    currentParent holds the parent node of current.

    currentLevel holds the number of nodes on the current level that we are iterating on.
    nextLevel holds the number of nodes that the current level (currentLevel) has as children. */

    let output, current, currentParent = 'root', currentLevel, nextLevel = 1;

    //Loop as long as there are nodes in the nodeQueue
    while (nodeQueue.length > 0) {
      currentLevel = nextLevel;
      nextLevel = 0;
      output = "";

      //Loop as long as there are nodes still to be visited on this level (kept track of by currentLevel)
      while (currentLevel > 0) {
        current = nodeQueue.shift();
        if (parentNodeQueue.length > 0) currentParent = parentNodeQueue.shift();

        //If the current node has a left branch
        if (current.left) {
          nodeQueue.push(current.left);
          parentNodeQueue.push(current.data);
          nextLevel ++;
        }

        //If the current node has a right branch
        if (current.right) {
          nodeQueue.push(current.right);
          parentNodeQueue.push(current.data);
          nextLevel++
        }

        output = output + `[${currentParent}] -> ` + `${current.data} `;

        currentLevel --;
      }

      console.log(output);
    }
  }
}

module.exports = { BinarySearchTreeNode, BinarySearchTree }