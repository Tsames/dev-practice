/* You are given a large integer represented as an integer array digits, where each digits[i]
is the ith digit of the integer.The digits are ordered from most significant to least significant
in left - to - right order.The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1, 2, 3]
Output: [1, 2, 4]

Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be[1, 2, 4].


Example 2:

Input: digits = [4, 3, 2, 1]
Output: [4, 3, 2, 2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be[4, 3, 2, 2].

Example 3:

Input: digits = [9]
Output: [1, 0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be[1, 0].


Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's. */

const plusOne = (bigint) => {
  //Return if the array is of length zero
  if (bigint.length <= 0) return

  //Check the last element in the array - if its not nine just increment it and return the array.
  let lastDigit = bigint[bigint.length - 1];
  if(lastDigit !== 9){
    bigint[bigint.length - 1] = lastDigit + 1

  //If the last element is nine, then we potentially have to add one to multuple indexes
  } else {
    let carryTen = true; i = bigint.length - 1;
    //Loop through the array beginning at the back only if you are carrying the ten
    while (carryTen) {
      carryTen = false;
      let current = bigint[i] + 1;
      //Check if adding one puts the number at that index at 10 -- and if this is the 0th index
      if (current >= 10 && i === 0) {
        bigint[i] = current % 10;
        bigint.unshift(1);
      //Check if adding one puts the number at that index at 10
      } else if (current >= 10) {
        carryTen = true;
        bigint[i] = current % 10;
        i--
      //Else this number isn't at 10 so just add one and return.
      } else {
        bigint[i] = current;
      }
    }
  }

  return bigint
}


//Tests
console.log(`Test 1, Input is ${[1, 2, 3]}:`);
console.log(`Result: ${plusOne([1, 2, 3])}`);


console.log(`Test 2, Input is ${[4, 3, 2, 1]}:`);
console.log(`Result: ${plusOne([4, 3, 2, 1])}`);


console.log(`Test 3, Input is ${[9]}:`);
console.log(`Result: ${plusOne([9])}`);

console.log(`Test 4, Input is ${[9,9,9,9,9]}:`);
console.log(`Result: ${plusOne([9,9,9,9,9])}`);