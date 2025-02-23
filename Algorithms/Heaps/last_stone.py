"""
Last Stone Weight

You are given an array of integers stones where stones[i] represents the weight of the ith stone.
We want to run a simulation on the stones as follows:

At each step we choose the two heaviest stones, with weight x and y and smash them togethers
If x == y, both stones are destroyed
If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
Continue the simulation until there is no more than one stone remaining.
Return the weight of the last remaining stone or return 0 if none remain.

Example 1:
Input: stones = [2,3,6,2,4]
Output: 1
Explanation:
We smash 6 and 4 and are left with a 2, so the array becomes [2,3,2,2].
We smash 3 and 2 and are left with a 1, so the array becomes [1,2,2].
We smash 2 and 2, so the array becomes [1].

Example 2:
Input: stones = [1,2]

Output: 1
Constraints:

1 <= stones.length <= 20
1 <= stones[i] <= 100
"""

import heapq


class Solution:
    """
    Plan:

    Since we are taking the biggest stones available and smashing them together each time, we want to convert our list
    into a maxheap.

    Then we will have a constant time complexity for getting the stone with the highest weight
    We will also have a logarithmic time complexity for adding that new weight back into our heap

    We are guaranteed at least a single stone in the list of stones.

    If our list only has a single element then return that element.

    Otherwise,
    We iterate using a while loop while our maxheap has more than one value
    At each iteration we pop the heaviest two stones off of our maxheap
    If they are equal, don't do anything, just go to the next iteration
    If they are not equal subtract the smaller value from the larger and insert that difference back into our maxheap
    At the end if there are no element in our maxheap then return 0, otherwise return the only element in our heap
    """

    def lastStoneWeight(self, stones: list[int]) -> int:
        if len(stones) == 1:
            return stones[0]

        maxHeap = [-s for s in stones]
        heapq.heapify(maxHeap)

        while len(maxHeap) > 1:
            biggest = heapq.heappop(maxHeap)
            big = heapq.heappop(maxHeap)
            if big > biggest:
                heapq.heappush(maxHeap, biggest - big)

        maxHeap.append(0)
        return abs(maxHeap[0])
        
        
solution = Solution()
print(solution.lastStoneWeight([2,3,6,2,4]) == 1)
print(solution.lastStoneWeight([1,2]) == 1)
