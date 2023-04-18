/* Debouncing is a technique used to control how many times we allow a function to be executed over time.
When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds
have elapsed since the debounced function was called. You almost certainly have encountered debouncing in your daily
lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button
(the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a debounce function which accepts a callback function and a wait duration. Calling debounce()
returns a function which has debounced invocations of the callback function following the behavior described above. */

let i = 0;

function debounce(func, wait) {

  let timeoutID;

  return (...arguments) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => func(...arguments), wait)
  }
  
}

function increment(num) {
  return num + 5;
}

const debouncedIncrement = debounce(increment, 500);

console.log(debouncedIncrement(0));

module.exports = debounce;