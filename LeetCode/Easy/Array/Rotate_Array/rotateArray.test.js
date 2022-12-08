const rotateArray = require('./rotateArray');

test('Testing LeetCode example One', () => {
  //Example 1
  expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('Testing LeetCode example Two', () => {
  //Example 2
  expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
})