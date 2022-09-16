// ---%*%*%*%*%*%*%*%*%%***%*%*%--- BINARY SEARCH TREE NODE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

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

  insertNode(node, newNode) {
    //Determine which side the newNode belongs on
    if (newNode.data < node.data) {

      /* If the left child is null replace it, otherwise run this function again with
      left child as the node */
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }

    } else {

      /* If the right child is null replace it, otherwise run this function again with
      right child as the node */
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  findMinNode(node = this.root) {
    if (!node || !node.left) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  findMaxNode(node = this.root) {
    if (!node || !node.right) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }

  remove(data) {

    //If the passed data is not in array format - convert it
    if (!Array.isArray(data)) data = [data];

    data.forEach((element) => {
      this.root = this.removeNode(this.root, element);
    })
  }

  removeNode(node, key) {

    //Current Node is null
    if (!node ) {

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
      if (!node.left && !node.right) {
        node = null;
        return node;

      //Delete a node with only a left child
      } else if (!node.right) {
        node = node.left;
        return node;
      
      //Delete a node with only a right child
      } else if (!node.left) {
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
    if (this.root === undefined) {
      console.log("Tree is empty.");
      return
    }

    //Helper variables - one queue data structure and 2 counters;
    const queue = [this.root];
    let output, current, levelCount, currentCount = 1;

    while (queue.length > 0) {
      levelCount = currentCount;
      currentCount = 0;
      output = "";

      while (levelCount > 0) {
        current = queue.shift();

        if (current.left !== null) {
          queue.push(current.left);
          currentCount ++;
        }

        if (current.right !== null) {
          queue.push(current.right);
          currentCount++
        }
        output = output + `${current.data} `;
        levelCount --;
      }

      console.log(output);
    }
  }
}

module.exports = { BinarySearchTreeNode, BinarySearchTree }