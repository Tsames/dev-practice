'''
https://neetcode.io/problems/duplicate-integer

Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
'''

class Solution:
    def hasDuplicate(self, nums: list[int]) -> bool:
        seen = set()
        
        for num in nums:
            if num in seen:
                return True
            else:
                seen.add(num)
        
        return False
    
    def oneLineHasDuplicate(self, nums: list[int]) -> bool:
        return len(set(nums)) < len(nums)
    
solution = Solution()
print(solution.hasDuplicate([1, 2, 3, 3]) == True)
print(solution.hasDuplicate([1, 2, 3, 4]) == False)