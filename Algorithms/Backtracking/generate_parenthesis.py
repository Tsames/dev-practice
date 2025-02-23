"""
https://leetcode.com/problems/generate-parentheses/description/

22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Constraints:
1 <= n <= 8
"""


class Solution:
    def valid_parenthesis(self, n: int) -> list[str]:
        """
        Whenever a problem uses the words combination or permutation I immediately think of backtracking.
        The difference between combination and permutation being that combinations consider all variants in terms of the order of a possiblity to be the same possibility.

        If we use a backtracking solution, it generally helps to try and think of the problem in terms of a binary decision tree.

        Whenever we are choosing between adding an open parenthesis and a closed parenthesis to our string we have to consider the general rule that we can only place a closed parenthesis if the number of open parenthesis that we have used to this point in the string is greater.
        Additionally, we have this outside constraint n.

        I can imagine a solution where we declare a variable to hold our result, an empty list called res.

        Then we define our recursive solution inside.
        The function should take three arguments.
        One variable, open, to keep track of how many open parenthesis we can still add to our constructed string.
        One variable, closed, to keep track of how many closed parenthesis we can still add to our constructed string.
        Lastly, a list of characters called parens, which we can use join on to form our combination.

        The base case for our recursive solution is that the length of parens is 2*n.
        When that happens, add the combination to res.

        Otherwise, if open == closed, add an open paren to parens. Decrement open. And make a new recursive call
        Else if open < closed,
            if open > 0,
                Make a recursive call adding an open paren
                Make a recursive call adding a closed paren
            else,
                Make a recursive call adding a closed paren


        Do we need to consider any strange edge cases? What if n is zero? Should we just return the empty set?
        I think this will work with our recursive solution
        """
        if n <= 0:
            return []

        res = []

        def recursive_solution(open: int, closed: int, parens: list[str]) -> None:
            # Base Case
            if len(parens) == 2 * n:
                res.append("".join(parens))
                return

            # If open and closed are equal, we have to add an open paren.
            if open == closed:
                parens.append("(")
                recursive_solution(open - 1, closed, parens)
                parens.pop()
            # If open < closed we could add either an open or a closed paren, so long as open is not less than zero.
            else:
                # So long as open > 0, make a recursive call for adding an open paren
                if open > 0:
                    parens.append("(")
                    recursive_solution(open - 1, closed, parens)
                    parens.pop()

                # In either case, we want to make a recursive call for adding a closed paren
                parens.append(")")
                recursive_solution(open, closed - 1, parens)
                parens.pop()

        recursive_solution(n, n, [])
        return res


solution = Solution()
assert solution.valid_parenthesis(-5) == [], "Test Case 5 Failed"
assert solution.valid_parenthesis(0) == [], "Test Case 1 Failed"
assert solution.valid_parenthesis(1) == ["()"], "Test Case 2 Failed"
assert solution.valid_parenthesis(2) == ["(())","()()"], "Test Case 3 Failed"
assert solution.valid_parenthesis(3) == ["((()))","(()())","(())()","()(())","()()()"], "Test Case 4 Failed"
