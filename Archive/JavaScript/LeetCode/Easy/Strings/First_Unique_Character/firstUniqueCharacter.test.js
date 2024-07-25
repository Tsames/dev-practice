const findUnique = require('./firstUniqueCharacter');

test('Testing LeetCode example One', () => {
    //Example 1
    expect(findUnique("leetcode")).toEqual(0)
})

test('Testing LeetCode example Two', () => {
    //Example 2
    expect(findUnique("loveleetcode")).toEqual(2)
})

test('Testing LeetCode example Three', () => {
    //Example 3 
    expect(findUnique("aabb")).toEqual(-1)
})