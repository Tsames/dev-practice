const validPalindrome = require('./validPalindrome');

test('Testing LeetCode example One', () => {
    //Example 1
    expect(validPalindrome("A man, a plan, a canal: Panama")).toEqual(true)
})

test('Testing LeetCode example Two', () => {
    //Example 2
    expect(validPalindrome("race a car")).toEqual(false)
})

test('Testing LeetCode example Three', () => {
    //Example 3
    expect(validPalindrome("")).toEqual(true)
})

test('Testing Failed LeetCode Submission Test', () => {
    //Example 4
    expect(validPalindrome("0P")).toEqual(false)
})

test('Testing Failed LeetCode Submission Test #2', () => {
    //Example 5
    expect(validPalindrome("ab_a")).toEqual(true)
})