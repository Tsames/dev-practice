"""
Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 
Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
"""

def power_set(nums: list[int]) -> list[list[int]]:
    power_set = [[]]
    
    def power_set_helper(subset: list[int], i: int) -> list[int]:
        if i == len(nums):
            if len(subset) > 0:
                power_set.append(subset)
            return
        
        new_set_without = subset.copy()
        new_set_with = subset.copy()
        new_set_with.append(nums[i])
        
        power_set_helper(new_set_with, i + 1)
        power_set_helper(new_set_without, i + 1)
        
    power_set_helper([], 0)
    return power_set

print(power_set([1,2,3])) # Expects [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
print(power_set([0])) # Expects [[],[0]]