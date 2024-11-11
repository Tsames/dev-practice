"""
https://neetcode.io/problems/combination-target-sum-ii

Combination Target Sum II
You are given an array of integers candidates, which may contain duplicates, and a target integer target.
Your task is to return a list of all unique combinations of candidates where the chosen numbers sum to target.
Each element from candidates may be chosen at most once within a combination.
The solution set must not contain duplicate combinations.
You may return the combinations in any order and the order of the numbers in each combination can be in any order.

Example 1:
Input: candidates = [9,2,2,4,6,1,5], target = 8
Output: [
  [1,2,5],
  [2,2,4],
  [2,6]
]

Example 2:
Input: candidates = [1,2,3,4,5], target = 7
Output: [
  [1,2,4],
  [2,5],
  [3,4]
]

Constraints:
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
"""


from typing import Optional


class Solution:
    def combinationSum2(self, candidates: list[int], target: int) -> list[list[int]]:
        """
        The big difference here being that our input array can have duplicates, while any possible combination cannot have duplicates.
        We could take a similar approach to combination_target_sum.py but instead we sort our input array first,
        Then, whenever we try to make a new combination we use a while loop to find the next unique number in candidates
        """

        candidates.sort()
        res = []

        def dfs(curr: list[int], i: int, total: int) -> None:
            # print(f"Recursive call with curr @ {curr}")
            if total == target:
                res.append(curr.copy())
                return

            if i >= len(candidates) or total > target:
                return
                
            curr.append(candidates[i])
            dfs(curr, i + 1, total + candidates[i])
            curr.pop()
            
            # Get to the final element in sorted candidates that has the same value as i originally
            while i + 1 < len(candidates) and candidates[i] == candidates[i+1]:
                i += 1
            dfs(curr, i + 1, total)

        dfs([], 0, 0)
        return res


solution = Solution()
print(solution.combinationSum2([1, 2, 3, 4, 5], 7))
print(solution.combinationSum2([9,2,2,4,6,1,5], 8))
