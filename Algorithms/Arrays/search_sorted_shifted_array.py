'''
https://leetcode.com/problems/search-in-rotated-sorted-array/description/

33. Search in Rotated Sorted Array
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
 
Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
'''

class Solution:
    def search(self, nums: list[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target: return mid
            
            # Is the left portion sorted?
            if nums[l] <= nums[mid]:
                # If its sorted and target should be in it, then search this portion
                if target < nums[mid] and target >= nums[l]:
                    r = mid - 1
                # If the target isn't there, then discard the sorted portion
                else:
                    l = mid + 1
            # If the left portion is not sorted, then the right portion must be sorted.
            else:
                # If the target should be in the sorted portion, search it
                if target > nums[mid] and target <= nums[r]:
                    l = mid + 1
                # If the target wouldn't be in the sorted portion, discard it
                else:
                    r = mid - 1
        
        return - 1
    
    
solution = Solution()
print(solution.search([4,7,8,9,1,2,3], 2))

            
            
            
                
                
                