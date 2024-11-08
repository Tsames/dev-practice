"""
https://neetcode.io/problems/top-k-elements-in-list

Top K Elements in List
Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2:
Input: nums = [7,7], k = 1
Output: [7]

Constraints:
1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.
"""

from collections import Counter


class Solution:
    def topKElementsOne(self, nums: list[int], k: int) -> int:
        """ 
        Using a dictonary, count the number of times a given value occur in our input array.
        Sort tuples of (value in array, number of time it occurs) based on the first index
        Done using counter object.
        
        Place the first k values in our output array
        
        
        """
        res = []
        counter = Counter(nums).most_common(2)
        for i in range(k):
            res.append(counter[i][0])
        return res
    
    # def topKElementsTwo(self, nums: list[int], k: int) -> int:
    #     counter = {}
    #     freq = [[] for i in len(range(nums)) + 1]
        
    #     for n in nums:
    #         counter[n] = 1 + counter.get(n, 0)
    #     for n, c in counter:
    #         freq[c].append(n)
            
    #     res = []
    #     for i in range(len(freq - 1), 0, -1):
    #         for n in freq[i]:
    #             res.append(n)
    #             if len(res) == k:
    #                 break
                
    #     return res
        
        

solution = Solution()
print(solution.topKElementsOne([1, 1, 1, 1, 2, 2, 3], 2))
