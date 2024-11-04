"""
https://neetcode.io/problems/islands-and-treasure

Islands and Treasure
You are given an mxn 2D grid initialized with these three possible values:

1. -1 : A water cell that can not be traversed.
2. 0 : A treasure chest.
3. INF : A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.

Fill each land cell with the distance to its nearest treasure chest.
If a land cell cannot reach a treasure chest than the value should remain INF.
Assume the grid can only be traversed up, down, left, or right.

Example 1:
Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]
Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

Example 2:
Input: [
  [0,-1],
  [2147483647,2147483647]
]
Output: [
  [0,-1],
  [1,2]
]

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 100
grid[i][j] is one of {-1, 0, 2147483647}
"""

from typing import Optional
from collections import deque


class Solution:
    def islandsAndTreasure(self, grid: list[list[int]]) -> list[list[int]]:
        """
        The big take away with this tricky problem is that when I am looking for the shortest distance
        from a node to another node I want to think I want to think BFS NOT DFS.
        """
        INF = 2147483647
        rows = len(grid)
        cols = len(grid[0])
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        visited = set()

        q = deque()
        # Fill the queue with all treasure chest positions
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 0:
                    q.append((row, col))

        distance = 0
        # Use BFS from treasure chest to assign the path length to land
        while q:

            for i in range(len(q)):
                r, c = q.popleft()
                
                # If we run into land, assign it a value equal to the path count
                grid[r][c] = distance

                # Add next coord to the q
                for dr, dc in directions:
                    if (
                        0 <= dr + r < rows
                        and 0 <= dc + c < cols
                        and (r + dr, c + dc) not in visited
                        and grid[r + dr][c + dc] == INF
                    ):
                        q.append((r + dr, c + dc))
                        visited.add((r + dr, c + dc))
                
            distance += 1

        return grid


solution = Solution()
print(
    solution.islandsAndTreasure(
        [
            [2147483647, -1, 0, 2147483647],
            [2147483647, 2147483647, 2147483647, -1],
            [2147483647, -1, 2147483647, -1],
            [0, -1, 2147483647, 2147483647],
        ]
    )
)
