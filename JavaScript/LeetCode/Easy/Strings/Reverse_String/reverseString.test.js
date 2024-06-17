const reverseString = require('./reverseString');

test('Testing LeetCode example One', () => {
    //Example 1
    expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"])
})

test('Testing LeetCode example Two', () => {
    //Example 2
    expect(reverseString(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"])
})