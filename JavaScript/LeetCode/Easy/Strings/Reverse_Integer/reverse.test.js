const reverse = require('./reverse');

test('Testing LeetCode example One', () => {
  //Example 1
  expect(reverse(123)).toEqual(321)
})

test('Testing LeetCode example Two', () => {
  //Example 2
  expect(reverse(-123)).toEqual(-321)
})

test('Testing LeetCode example Three', () => {
    //Example 3
    expect(reverse(120)).toEqual(21)
  })