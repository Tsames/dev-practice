'''
https://leetcode.com/problems/maximum-subarray/description/

53. Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
 
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
'''

class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        res = float("-inf")
        sum = 0
        
        l = r = 0
        while r < len(nums):
            sum += nums[r]
            res = max(res, sum)
            
            if sum < 0:
                sum = 0
                l += 1
                
            r += 1
            
        return res
   

solution = Solution()
assert solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) == 6, "Test one failed."      
assert solution.maxSubArray([1]) == 1, "Test two failed."        
assert solution.maxSubArray([5,4,-1,7,8]) == 23, "Test three failed."
assert solution.maxSubArray([-5,-4,-1,-7,-8]) == -1, "Test four failed."