// This function returns the Nth number in the fibonacci sequence.
// https://en.wikipedia.org/wiki/Fibonacci_number
// For this function, the first two fibonacci numbers are 1 and 1

function fibonacci(n, idx=2, a=1, b=1, sum=0) {
  if (n == 1) {
    return a;
  } else if (n == 2) {
    return b;
  } else if (idx == n) {
    return sum;
  }

  sum = a + b;
  a = b;
  b = sum;
  idx ++;

  return fibonacci(n, idx, a, b, sum);
}

//Tests
//Expected Output - 55
console.log(fibonacci(10));
//Expected Output - 144
console.log(fibonacci(12));
//Expected Output - 1
console.log(fibonacci(1));
//Expected Output - 1
console.log(fibonacci(2));
//Expected Output - 2
console.log(fibonacci(3));