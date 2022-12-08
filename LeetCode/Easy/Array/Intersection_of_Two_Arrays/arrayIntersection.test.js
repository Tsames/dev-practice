const arrayIntersection = require('./arrayIntersection');

test('Testing LeetCode example One', () => {
  //Example 1
  expect(arrayIntersection([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
})

test('Testing LeetCode example Two', () => {
  //Example 2
  expect(arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4])
})