const strStr = require('./strStr');

test('Testing LeetCode example One', () => {
    //Example 1
    expect(strStr("sadbutsad", "sad")).toEqual(0)
})

test('Testing LeetCode example Two', () => {
    //Example 2
    expect(strStr("leetcode", "leeto")).toEqual(-1)
})