// ---%*%*%*%*%*%*%*%*%%***%*%*%--- Queue Class ---%*%*%*%*%*%*%*%*%%***%*%*%---

class Queue {

  constructor(InitData = []) {

    //Initialize Queue and Pointer
    this.data = [];

    //Add to Queue based on given array
    this.push(InitData)
  }

  // ------------------------ Return the state of the Queue ------------------------

  isEmpty() {
    if (this.data.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  // ------------------------ Get the size of the Queue ------------------------

  size() {
    return this.data.length;
  }

  // ------------------------ Add to the top of the Queue ------------------------

  push(newData) {
    if (Array.isArray(newData)) {
      newData.forEach((newDataPoint) => {
        this.data.push(newDataPoint);
      })
    } else {
      this.data.push(newDataPoint);
    }
  }

  // ------------------------ Remove from the top of the Queue ------------------------

  pop() {
    return this.data.shift();
  }

  // ------------------------ Get the data at the top of the Queue ------------------------

  peek() {
    return this.data[0];
  }

  // ------------------------ Print the entire Queue ------------------------

  print() {
    if (this.data.length === 0) {
      console.log("Queue is empty");
    }
    let output = "";

    for (let i = 0; i < this.data.length; i++) {
      if (i === 0) {
        output = output + this.data[i];
      } else {
        output = output + ' => ' + this.data[i];
      }
    }

    console.log(output);
  }

  // ------------------------ Clear the Queue ------------------------
  clear() {
    this.data = [];
  }

}

module.exports = Queue;