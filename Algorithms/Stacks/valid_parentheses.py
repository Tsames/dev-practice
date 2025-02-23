'''
https://neetcode.io/problems/validate-parentheses

Valid Parentheses
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:
Input: s = "[]"
Output: true

Example 2:
Input: s = "([{}])"
Output: true

Example 3:
Input: s = "[(])"
Output: false
Explanation: The brackets are not closed in the correct order.

Constraints:
1 <= s.length <= 1000
'''

class Solution:
    def isValid(self, s: str) -> bool:
        '''
        First, create a mapping of the closing parenthesis to its open counterpart.
        Next, declare our stack
        
        Now loop through our string.
        If we encounter an open bracket, add it to the stack
        Otherwise, if we encounter a closed bracket, compare our dict[closed bracket] to the first element off the stack.
        If the stack is empty or it doesn't match, return False
        
        Finally, to handle the case in which our string is only open brackets, return the length of stack == 0
        '''
        closedToOpenMap = {
            ")":"(",
            "}":"{",
            "]":"[",
        }
        
        stack = []
        
        for char in s:
            if char not in closedToOpenMap:
                stack.append(char)
            elif char in closedToOpenMap and stack:
                if stack.pop() != closedToOpenMap[char]:
                    return False
            else:
                return False
            
        return len(stack) == 0
    
    
solution = Solution()
print(solution.isValid("[]") == True)
print(solution.isValid("") == True)
print(solution.isValid("([{}])") == True)
print(solution.isValid("[(])") == False)
