const singleNumber = require('./singleNumber');

test('Testing LeetCode example One', () => {
    //Example 1
    expect(singleNumber([2,2,1])).toEqual(1)
})

test('Testing LeetCode example Two', () => {
    //Example 2
    expect(singleNumber([4,1,2,1,2])).toEqual(4)
})

test('Testing LeetCode example Three', () => {
    //Example 3 
    expect(singleNumber([1])).toEqual(1)
})