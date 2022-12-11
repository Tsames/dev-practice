const rotateArray = require('./rotateArray');
const rotateArrayClever = require('./rotateArray');

test('Testing LeetCode example One', () => {
  //Example 1
  expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('Testing LeetCode example Two', () => {
  //Example 2
  expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
})

// test('Testing LeetCode example One with clever solution', () => {
//   //Example 1 with clever solution
//   expect(rotateArrayClever([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
// })

// test('Testing LeetCode example Four with clever solution', () => {
//   //Example 2 with clever solution
//   expect(rotateArrayClever([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
// })