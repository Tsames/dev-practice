// ---%*%*%*%*%*%*%*%*%%***%*%*%--- BINARY TREE NODE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// ---%*%*%*%*%*%*%*%*%%***%*%*%--- BINARY TREE CLASS ---%*%*%*%*%*%*%*%*%%***%*%*%---

class BinaryTree {

  constructor(data = null) {
    this.insert(data);
  }

  insert(data) {
    //If the passed data is not in array format - convert it
    if (!Array.isArray(data)) data = [data];

    //If there is no root - make one
    if (!this.root) {
      //Create a new node and insert it
      const newNode = new BinaryTreeNode(data.shift());
      this.root = newNode;
    }

    //Otherwise Loop through our array and call our recursive helper function
    data.forEach((element) => {
      const newNode = new BinaryTreeNode(element);
      this.insertNode(newNode)
    })

  }

  //This insertion method tries to keep the binary tree balanced

  insertNode(newNode) {
    //Helper variable and queue
    let current;
    let nodeQueue = [this.root];

    //While there are items in the queue loop, each time considering a new node from the front of the queue
    while (nodeQueue.length > 0) {
      current = nodeQueue.shift();
      
      //If there is no left node - insert new node here
      if (!current.left) {
        current.left = newNode;
        return;

      //If there is no right node - insert new node here
      } else if (!current.right) {
        current.right = newNode;
        return;

      //Else add both left and right nodes to queue and iterate again  
      } else {
        nodeQueue.push(current.left);
        nodeQueue.push(current.right);
      }
    }
  }

  findMinNode(node = this.root, lowestNode = null, lowest = Number.POSITIVE_INFINITY) {
    //If current node is null, then return the node with the lowest data thats been found in this subtree.
    if (!node) return lowestNode;

    //If current node has data that is less than lowest, then set new values.
    if (node.data < lowest) {
      lowestNode = node;
      lowest = node.data;
    }

    //Get the node with the lowest data value in each subtree.
    const leftSubTree = this.findMinNode(node.left, lowestNode, lowest);
    const rightSubTree = this.findMinNode(node.right, lowestNode, lowest);

    //Compare the results of each subtree and return the node with the lower data value of the two.
    if (leftSubTree.data <= rightSubTree.data) return leftSubTree;
    return rightSubTree
  }

  findMaxNode(node = this.root, greatestNode = null, greatest = Number.NEGATIVE_INFINITY) {
    //If current node is null, then return the node with the greatest data thats been found in this subtree.
    if (!node) return greatestNode;

    //If current node has data that is greater than greatest, then set new values.
    if (node.data > greatest) {
      greatestNode = node;
      greatest = node.data;
    }

    //Get the node with the greatest data value in each subtree.
    const leftSubTree = this.findMaxNode(node.left, greatestNode, greatest);
    const rightSubTree = this.findMaxNode(node.right, greatestNode, greatest);

    //Compare the results of each subtree and return the node with the greater data value of the two.
    if (leftSubTree.data >= rightSubTree.data) return leftSubTree;
    return rightSubTree
  }

  findMaxDepth(node = this.root) {
    //If the node is null
    if (!node) return 0;

    /* Since its max-depth we would return the the maximum of either left or right subtree.
    We add one to account for the current node that our recursive function is called on. */
    return 1 + Math.max(this.findMaxDepth(node.left), this.findMaxDepth(node.right));
  }

  remove(data) {

    //If the passed data is not in array format - convert it
    if (!Array.isArray(data)) data = [data];

    data.forEach((element) => {
      this.removeNode(element);
    })
  }

  removeNode(target,) {

    //Get both the parent node and the target node - use the left variable to track which subtree of the parent has the target node
    let left = true, parentNode = this.search(target, true), targetNode = parentNode.left;

    //Correct initial variable settings if needed
    if (parentNode.right && parentNode.right.data === target) {
      targetNode = parentNode.right;
      left = false;
    } 

    //If target has no subtrees
    if (!targetNode.left && !targetNode.right) {

      if (left) parentNode.left = null;
      else parentNode.right = null;

    //If target only has a left subtree
    } else if (!targetNode.right) {

      if (left) parentNode.left = targetNode.left;
      else parentNode.right = targetNode.left;

    //If target only has a right subtree
    } else if (!targetNode.left) {

      if (left) parentNode.left = targetNode.right;
      else parentNode.right = targetNode.right;

    //Else target has left and right subtrees
    } else {

      if (left) {
        let temp = targetNode.right;
        parentNode.left = targetNode.left;
        targetNode.left.right = temp;
      } else {
        let temp = targetNode.right;
        parentNode.right = targetNode.left;
        targetNode.left. = temp;
      }

    }
  }

  count(node = this.root, count = 0) {
    if (!node) return 0;

    count += 1;

    if (node.left) count = this.count(node.left, count);
    if (node.right) count = this.count(node.right, count);

    return count;
  }

  //Depth-First Search

  search(target, getParent = false, node = this.root, parent = null) {
    //If node is null then return null
    if (!node) return null;

    //If node has the target data and getParent was requested return the parent node
    if (node.data === target && getParent) return parent;

    //If node has the target data then return it
    if (node.data === target) return node;

    //Search left subtree - if something non-null is found return it
    let left = this.search(target, getParent, node.left, parent = node);
    if (left) return left;

    //Search right subtree - return it either way since if it is null then both left and right subtrees are null.
    return this.search(target, getParent, node.right, parent = node);
  }

  print() {
    if (!this.root) {
      console.log("Tree is empty.");
      return
    }

    //Helper variables - two queue data structures, 4 temp variables, and 2 counters;
    const nodeQueue = [this.root];
    const parentNodeQueue = [];

    /* 
    output holds the string being printed. It holds one level of the tree at a time.
    current holds the node being visited in our loops.

    currentParent holds the parent node of current.
    lastParent holds the parent of the previous iteration of current.

    currentLevel holds the number of nodes on the current level that we are iterating on.
    nextLevel holds the number of nodes that the current level (currentLevel) has as children. */

    let output, current, currentParent, lastParent, currentLevel, nextLevel = 1;

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
          parentNodeQueue.push(current);
          nextLevel++;
        }

        //If the current node has a right branch
        if (current.right) {
          nodeQueue.push(current.right);
          parentNodeQueue.push(current);
          nextLevel++
        }

        if (currentParent !== lastParent) {
          output = output + `[${currentParent.data}] -> ` + `${current.data} `;
        } else {
          output = output + `${current.data} `;
        }

        lastParent = currentParent;
        currentLevel--;
      }

      console.log(output);
    }
  }
}

const exampleTree = new BinaryTree([10, 5, 8, 7, 6, 9, 3, 4, 2, 1, 15, 18, 17, 16, 19, 13, 14, 12, 11, 20])
exampleTree.print();
console.log(exampleTree.search(7));
console.log(exampleTree.search(7,true));

module.exports = { BinaryTreeNode, BinaryTree }