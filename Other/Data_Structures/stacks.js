//Building a Array Stack
class ArrayStack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

//Testing Array Stack
const stck = new ArrayStack();
console.log(stck.isEmpty());
stck.push(2)
console.log(stck.peek());