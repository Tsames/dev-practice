"""
https://neetcode.io/problems/same-binary-tree

Same Binary Tree
Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.

Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [4,7], q = [4,null,7]
Output: false

Example 3:
Input: p = [1,2,3], q = [1,3,2]
Output: false

Constraints:
0 <= The number of nodes in both trees <= 100.
-100 <= Node.val <= 100
"""

from typing import Optional
from binary_tree import TreeNode, createFromList
from collections import deque


class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        qq = deque([p])
        qp = deque([q])

        while qq and qp:
            currq = qq.popleft()
            currp = qp.popleft()

            if not currq and not currp:
                continue
            elif not currq or not currp:
                return False
            elif currq.val != currp.val:
                return False

            qq.append(currq.left)
            qq.append(currq.right)

            qp.append(currp.left)
            qp.append(currp.right)

        if qq or qp:
            return False

        return True


solution = Solution()
print(solution.isSameTree(createFromList([1, 2, 3]), createFromList([1, 2, 3])) == True)
print(solution.isSameTree(createFromList([1, 2, 3]), createFromList([1, 2, 4])) == False)
print(solution.isSameTree(createFromList([]), createFromList([])) == True)
