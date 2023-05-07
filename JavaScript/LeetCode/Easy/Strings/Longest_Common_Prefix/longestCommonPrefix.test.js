const longestCommonPrefix = require('./longestCommonPrefix');

test('Testing LeetCode example One', () => {
  //Example 1
  expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl")
})

test('Testing LeetCode example Two', () => {
  //Example 2
  expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("")
})

// test('Testing LeetCode example Three', () => {
//     //Example 3
//     expect(longestCommonPrefix()).toEqual()
//   })