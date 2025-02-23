'''
Algo Practice: Interleaved strings

Paste this section into your development environment to get started! You can use Formation's Coding Pad or any other tools you prefer. Use the Engineering Method for solving algorithms to make progress.
Problem Prompt
Given two strings x and y we can create an interleaving by repeatedly taking the first character of either and appending the characters together to form a new string. Specifically, valid interleavings will have these properties:
len(interleaving) == len(x) + len(y)
interleaving - x = y and interleaving - y = x meaning that removing the characters in x from the interleaving will produce y and vice versa.
x and y both appear as subsequences in the interleaving. The order of characters in x and y are preserved in the interleaving.
Given x, y, and s, write a function that determines whether s is a valid interleaving of x and y.
For this exercise, solve this with backtracking. There are solutions with more efficient complexities that employ dynamic programming or recursion with memorization but they aren't expected for this task. We'll get to those later.
Example(s)
These are some valid interleaving using the strings *ABC* and *BCD*:

isInterleaving("ABC", "BCD", "BABCCD") == True
Explanation:
 x:             AB C
 y:            B  C D
 interleaving: BABCCD

isInterleaving("ABC", "BCD", "ABCBCD") == True
Explanation:
 x:            ABC
 y:               BCD
 interleaving: ABCBCD

isInterleaving("ABC", "BCD", "BCDABC") == True
Explanation:
 x:               ABC
 y:            BCD
 interleaving: BCDABC

isInterleaving("ABC", "BCD", "BCABDC") == True
Explanation:
 x:              AB C
 y:            BC  D
 interleaving: BCABDC

isInterleaving("ABC", "BCD", "BABCDD") == False
Explanation:
BABCDD cannot be created from the any combination of the sequences ABC & BCD

Signature/Prototype
function isInterleaving(x, y, s) {
def is_interleaving(x: str, y: str, s: str) -> bool:
'''

class Solution:
    '''
    Important to note here that our output is only supposed to return a boolean. Not combinations or permutations.

    Edge Cases:
    If we are given two empty strings, the only true interleaving would be an empty string

    Assuming only valid letters from the english alphabet as caps will be given as input.

    Assuming that each character within x and y may only be used once, and must be used in order that the string occur.

    We'll likely need two pointers, one for each of our input strings to track where in the string we are.

    This isn't backtracking but one solution we could use that would be iterative would be to traverse the letters of the interleaving, checking if that letter exists in string 1 or string 2 at its pointer index. If not, break the loop and return false. If we iterate through the entire loop AND the pointer are equal to the length of the strings, we return true.

    Backtracking usually boils down to some sort of binary decision tree at each step.

    We could certinly construct all possible interleavings and return true if we find the input in those possibilities.

    In that case we would define our recursive solution to accept three variables. p1, p2, and interleaving where p1 is a pointer for str1 and p2 is a pointer for str2.

    Our base case would be if the length of interleaving is equal to the length of the input interleaving.

    if it is return interleaving == input interleaving

    then we could make a call to that adds either a letter from str1 or str2

    return true if any of these recursive calls return true
    '''

    def is_interleaving(x: str, y: str, s: str) -> bool:
        
        if len(s) != len(x) + len(y):
            return False

        def recursive_solution(p1: int, p2: int, interleaving: list[str]) -> bool:
            # Base Case
            if len(interleaving) == len(s):
                res = "".join(interleaving)
                # print(f"Returning: {res == s} for {res}")
                return res == s

            
            # Otherwise, make recursive calls to pick from either x or y so long as they have more characters that haven't yet been used
            choose_left = choose_right = False

            if p1 < len(x):
                interleaving.append(x[p1])
                choose_left = recursive_solution(p1 + 1, p2, interleaving)
                interleaving.pop()

            if p2 < len(y):
                interleaving.append(y[p2])
                choose_right = recursive_solution(p1, p2 + 1, interleaving)
                interleaving.pop()
                
            # If one possible combination that returns true was found, bubble up true
            return choose_left or choose_right
        
        return recursive_solution(0,0,[])
    
solution = Solution()
assert solution.is_interleaving("ABC","BCD", "BABCCD") == True, "First Test failed."
assert solution.is_interleaving("ABC","BCD", "ABCBCD") == True, "First Test failed."
assert solution.is_interleaving("ABC","BCD", "BCDABC") == True, "First Test failed."
assert solution.is_interleaving("ABC","BCD", "BCABDC") == True, "First Test failed."
assert solution.is_interleaving("ABC","BCD", "BABCDD") == False, "First Test failed."