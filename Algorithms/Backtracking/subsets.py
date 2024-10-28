"""
https://neetcode.io/problems/subsets

Subsets
Given an array nums of unique integers, return all possible subsets of nums.
The solution set must not contain duplicate subsets. You may return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [7]
Output: [[],[7]]

Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
"""

class Solution:
    """
    Plan:
    
    We should have a parent function that declares an empty results list (res)
    
    In our recursive helper function we should take in an index (idx), and the current list we are constructing as a subset (sub)
    In the case of each number in the provided list (nums) we either include it in the subset(sub) we are creating or we don't.
    Make a recursive call for each of these possibilities.
    
    Our base case should be if the index (idx) we receive is equal to the length of the provided list (nums), then we append our subset to the result list (res_)
    
    Once our recursive helper is finished iterating we should return our results list (res)
    """
    
    def subsets(self, nums: list[int]) -> list[list[int]]:
        res = []
        
        subset = []
        def recursiveHelper(idx: int) -> None:
            if idx == len(nums):
                res.append(subset.copy())
                return
            
            # include new value
            subset.append(nums[idx])
            recursiveHelper(idx + 1)
            
            # don't include new value
            subset.pop()
            recursiveHelper(idx + 1)
        
        recursiveHelper(0)
        return res
    
    
solution = Solution()
print(solution.subsets([1,2,3]))