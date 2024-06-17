// ---%*%*%*%*%*%*%*%*%%***%*%*%--- Stacks Class ---%*%*%*%*%*%*%*%*%%***%*%*%---

class Stack {
  
  constructor(InitData = []) {

    //Initialize Stack and Pointer
    this.data = [];
    this.pointer = -1;

    //Add to stack based on given array
    this.push(InitData)
  }

  // ------------------------ Return the state of the stack ------------------------

  isEmpty() {
    if (this.pointer === -1) {
      return true;
    } else {
      return false;
    }
  }

  // ------------------------ Get the size of the stack ------------------------

  size() {
    return this.pointer + 1;
  }

  // ------------------------ Add to the top of the stack ------------------------

  push(newData) {
    if (Array.isArray(newData)) {
      newData.forEach((newDataPoint) => {
        this.data[this.pointer + 1] = newDataPoint
        this.pointer += 1;
      })
    } else {
      this.data[this.pointer + 1] = newData
      this.pointer += 1;
    }
  }

  // ------------------------ Remove from the top of the stack ------------------------

  pop() {
    this.pointer -= 1;
    return this.data[this.pointer + 1]
  }

  // ------------------------ Get the data at the top of the stack ------------------------

  peek() {
    return this.data[this.pointer];
  }

  // ------------------------ Print the entire stack ------------------------

  print() {
    if (this.pointer === -1) {
      console.log("Stack is empty");
    }
    let output = "";

    for (let i = this.pointer; i >= 0; i--) {
      if (i === this.pointer) { 
        output = output + this.data[i];
      } else {
        output = output + ' => ' + this.data[i];
      }
    }

    console.log(output);
  }

  // ------------------------ Clear the stack ------------------------
  clear() {
    this.pointer = -1;
  }

}

module.exports = Stack;