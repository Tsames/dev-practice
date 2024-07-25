const rotateImage = require('./rotateImage');

test('Testing LeetCode example One', () => {
  //Example 1
  expect(rotateImage([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[7,4,1],[8,5,2],[9,6,3]])
})

test('Testing LeetCode example Two', () => {
  //Example 2
  expect(rotateImage([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]])
})