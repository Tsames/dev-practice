class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(item) {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
        } else if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty() || !this.head) {
            return null;
        } else {
            const removedNode = this.head;
            this.head = this.head.next;
            removedNode.next = null;
            this.length--;
            if (this.isEmpty()) {
                this.tail = null;
            }
            return removedNode.value;
        }
    }
}

module.exports = { Node, Queue }