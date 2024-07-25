/* 

Array.prototype.filter creates a new array populated with the results of calling a provided
function on every element in the calling array.

Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used
by the autograder, we shall instead implement it as Array.prototype.myFilter.

Examples:
[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]

*/

//Array.prototype.filter takes two arguments - the callback and and argument that it should set the keyword this to.
function myFilter(callback, thisArg) {
  const length = this.length;
  const output = [];

  for (let i=0; i < length; i++) {
    //Cache the value of the array at i in case this gets changed when running the callback function
    const value = this[i];

    if (Object.hasOwn(this, i) && callback.call(thisArg, value, i, this)) {
      output.push(value);
    }
  }

  return output;
}

Array.prototype.myFilter = myFilter;
console.log([5,8,10,15,20,23,25,28,30].myFilter(element => element % 5 === 0));

module.exports = myFilter;