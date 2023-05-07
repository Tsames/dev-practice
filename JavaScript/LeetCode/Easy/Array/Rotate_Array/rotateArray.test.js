const rotateArray = require('./rotateArray');
const rotateArrayClever = require('./rotateArray');

test('Testing LeetCode example One for V1', () => {
  //Example 1
  expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('Testing LeetCode example Two for V1', () => {
  //Example 2
  expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
})

<<<<<<< HEAD
test('Testing LeetCode example One for V2', () => {
  //Example 1
  expect(rotateArrayClever([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('Testing LeetCode example Two for V2', () => {
  //Example 2
  expect(rotateArrayClever([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
})
=======
// test('Testing LeetCode example One with clever solution', () => {
//   //Example 1 with clever solution
//   expect(rotateArrayClever([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
// })

// test('Testing LeetCode example Four with clever solution', () => {
//   //Example 2 with clever solution
//   expect(rotateArrayClever([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
// })
>>>>>>> c03e107eb5b10781dd92508b39570be95955aa3b
