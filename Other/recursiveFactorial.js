//Build a recursive function that returns the factorial of a given number.

function factorial(num, total = 1) {
  if (num === 0) {
    return total
  }
  total *= num;
  return factorial(num - 1, total);
}

//Tests
//Expected Output 6
console.log(factorial(3));
//Expected Output 120
console.log(factorial(5));