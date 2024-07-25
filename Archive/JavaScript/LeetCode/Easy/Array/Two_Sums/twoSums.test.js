const twoSums = require('./twoSums');

//These Test are for the Third Version of twoSums.js where it is expected that the given array is sorted.

test('Testing LeetCode example One', () => {
    //Example 1
    expect(twoSums([2,7,11,15], 9)).toEqual([0,1])
})

test('Testing LeetCode example Two', () => {
    //Example 2
    expect(twoSums([2,3,4], 6)).toEqual([0,2])
})

test('Testing LeetCode example Three', () => {
    //Example 3 
    expect(twoSums([3,3], 6)).toEqual([0,1])
})