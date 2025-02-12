"""
https://neetcode.io/problems/find-duplicate-integer

Find Duplicate Integer
You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.

Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.

Example 1:
Input: nums = [1,2,3,2,2]
Output: 2

Example 2:
Input: nums = [1,2,3,4,4]
Output: 4

Follow-up: Can you solve the problem without modifying the array nums and using 
O(1) extra space?

Constraints:
1 <= n <= 10000
nums.length == n + 1
1 <= nums[i] <= n
"""

from Algorithms.LinkedLists.list_node import ListNode, createFromList

class Solution:
    def findDuplicate(self, nums: list[int]) -> int:
        """
        To complete this problem when we are allowed to modify the array, we could sort it.
        Then we iterate through the array and compare each index to the next index.
        If those values are ever equal, we have found our duplicate.
        
        
        To solve this without modifying the input array and in O(1) space we'll need to use some other piece of information to our advantage.
        We know that nums will have size n.
        Each element in that array will be in the range [1,n-1]
        Can we conclude anything about the sum of the values here?
        Its made trickier by the detail that the duplicate integer can occur two or more times.
        In theory, we could have an input array where the dupicate appears every time except one time.
        
        
        """