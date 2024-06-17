const removeDuplicates = require('./removeDuplicates');

test('new test', () => {
    //Example 1
    expect(removeDuplicates([1,1,2])).toEqual([1,2,null])
    //Example 2
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual([0,1,2,3,4,null,null,null,null,null])
    //Example Custom
    expect(removeDuplicates([1,1,1,2,3,4,5,5,6,7,8,8,9,10,10])).toEqual([1,2,3,4,5,6,7,8,9,10,null,null,null,null,null])
})