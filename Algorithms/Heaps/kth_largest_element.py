"""
https://neetcode.io/problems/kth-largest-element-in-an-array

Kth Largest Element in an Array

Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.
By kth largest element, we mean the kth largest element in the sorted order, not the kth distinct element.
Follow-up: Can you solve it without sorting?

Example 1:
Input: nums = [2,3,1,5,4], k = 2
Output: 4

Example 2:
Input: nums = [2,3,1,1,5,5,4], k = 3
Output: 4

Constraints:
1 <= k <= nums.length <= 10000
-1000 <= nums[i] <= 1000
"""
import heapq

class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        nums = [-x for x in nums]
        heapq.heapify(nums)
        
        for i in range(k - 1):
            heapq.heappop(nums)
            
        return -heapq.heappop(nums)
        
        
solution = Solution()
print(solution.findKthLargest([5,4,3,2,1], 3))
        