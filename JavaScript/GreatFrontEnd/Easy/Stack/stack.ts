/*
Implement a stack data structure in JavaScript that contains the following operations:

Constructor
Creates an instance of a Stack class that doesn't contain any items. The constructor not accept any arguments.

Methods
1.push
  Pushes an item onto the top of the stack.

    Arguments
    {*} item: The item to be pushed onto the stack.
    Returns
    {number}: The new length of the stack.
    Time Complexity
    O(1)

2.pop
  Remove an item at the top of the stack.
    Returns
    {*} item: The item at the top of the stack if it is not empty, undefined otherwise.
    Time Complexity
    O(1)

3.isEmpty
    Determines if the stack is empty.
      Returns
      {boolean}: true if the stack has no items, false otherwise.
      Time Complexity
      O(1)

4.peek
  Returns the item at the top of the stack without removing it from the stack.
    Returns
    {*}: The item at the top of the stack if it is not empty, undefined otherwise.
    Time Complexity
    O(1)

5.length
  Returns the number of items in the stack.
    Returns
    {number}: The number of items in the stack.
    Time Complexity
    O(1)

Examples
const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false
*/

export default class Stack {
  data: Array<any>
  stackLength: number

  constructor(){
    //Initialize Stack and length
    this.data = [];
    this.stackLength = 0;
  }

  push(newData){
    this.data.unshift(newData);
    this.stackLength += 1;
    return this.stackLength;
  }

  pop() {
    const returnValue = this.data.shift();
    if (this.stackLength !== 0) this.stackLength -= 1;
    return returnValue;
  }

  isEmpty(){
    return this.stackLength === 0? true : false;
  }

  peek(){
    return this.data[0] !== undefined ? this.data[0] : undefined;
  }

  length(){
    return this.stackLength;
  }

}

// const stack = new Stack();
// console.log(stack.isEmpty()); // true
// stack.push(1);
// stack.push(2);
// console.log(stack.length()); // 2
// stack.push(3);
// console.log(stack.peek()); // 3
// console.log(stack.pop()); // 3
// console.log(stack.isEmpty()); // false