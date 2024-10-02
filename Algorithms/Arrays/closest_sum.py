"""
Given a sorted int array nums and an int target.
Find two integers in nums such that the sum is closest to target.

Example 1:
Input: nums = [1, 2, 3, 4, 5], target = 10
Output: [4, 5]

Clarifying Questions:

- If there are multiple pairs of numbers that are the same distance from our target, or that equal our target,
what should our algorithm return?

- Can we assume no such input will be given where that is the case?

- What should be returned in the event of an empty array or an array with a single element?

BrainStorming:

I believe you could brute force this with an algorithm with a O(n^2) time complexity.

To find an algorithm with O(n) time complexity we could use a sliding window approach,
Since our array is sorted, we could have pointers pointing to the first and final index of the nums array.
If the sum of those two numbers is greater than our target, move the right pointer down.
If the sum of those two numbers is less than our target, move the left pointer up.
If the sum of those two numbers is equal to our target, return those indexes.

To implement this, we would need four variables, two pointers for the indexes
One variables to keep track of the numbers used
One varaible to keep track of how close we got
"""

def closest_sum(nums: list[int], target: int) -> list[int]:
    if len(nums) < 2: return None
    left_pointer, right_pointer, difference, res = 0, len(nums) - 1, float("inf"), []
    
    while left_pointer < right_pointer:
        new_difference = target - (nums[left_pointer] + nums[right_pointer])
        
        if abs(new_difference) < difference:
            difference = abs(new_difference)
            res = [nums[left_pointer], nums[right_pointer]]
        
        if new_difference == 0:
            return res
        elif new_difference < 0:
            right_pointer -= 1
        else:
            left_pointer += 1
    
    return res


print(closest_sum([1, 2, 3, 4, 5], 10)) # Expects [4,5]
print(closest_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)) # Expects [1,2]

            