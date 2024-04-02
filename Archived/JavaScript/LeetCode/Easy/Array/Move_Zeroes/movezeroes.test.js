const moveZeroes = require('./movezeroes');

test('Testing LeetCode example One', () => {
  //Example 1
  expect(moveZeroes([1])).toEqual([1])
})

test('Testing LeetCode example Two', () => {
  //Example 2
  expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0])
})

test('Testing LeetCode example Three', () => {
    //Example 2
    expect(moveZeroes([0,0,1])).toEqual([1,0,0])
  })