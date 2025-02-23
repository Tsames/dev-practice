"""
https://neetcode.io/problems/permutations

Permutations
Given an array nums of unique integers, return all the possible permutations.
You may return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [7]
Output: [[7]]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
"""


class Solution:
    def permutations(nums: list[int]) -> list[int]:
        res = []
        
        def dfs():
            


solution = Solution()
assert solution.permutations([1, 2, 3]) == [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
]
assert solution.permutations([7]) == [[7]]
