"""
https://leetcode.com/problems/valid-anagram/description/

242. Valid Anagram
Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
"""


def valid_anagram(s: str, t: str) -> bool:
    """
    Seems like there is a few different routes we could go for this problem.

    We could sort both strings and then compare them.
    If the lists we got from sorting had the same characters in the same order,
    then we know that t is an anagram of s. 
    Space Complexity - O(s + t) since we create to lists of size s and t when we sort.
    Time Complexity - O(2(n logn)) -> O(n logn)
    """

    return sorted(s) == sorted(t)


assert valid_anagram("aba", "bab") == False, "Test Case 1 Failed"
assert valid_anagram("", "a") == False, "Test Case 2 Failed"
assert valid_anagram("aba", "") == False, "Test Case 3 Failed"
assert valid_anagram("", "") == True, "Test Case 4 Failed"
assert valid_anagram("testcase", "casetest") == True, "Test Case 5 Failed"

from collections import Counter


def alternate_valid_anagram(s: str, t: str) -> bool:
    """
    Alternatively, we could use counter objects.
    Create a counter object for s and t.
    This creates a hashmap of unique character in the string to frequency.
    Compare the two counter objects, if they are the same, return true, if not, false.
    Space Complexity of O(s + t).
    Time Complexity would be O(2(s + t)) -> O(s + t) which is linear time.
    """
    counter_s = Counter(s)
    counter_t = Counter(t)
    return counter_s == counter_t


assert alternate_valid_anagram("aba", "bab") == False, "Test Case 1 Failed"
assert alternate_valid_anagram("", "a") == False, "Test Case 2 Failed"
assert alternate_valid_anagram("aba", "") == False, "Test Case 3 Failed"
assert alternate_valid_anagram("", "") == True, "Test Case 4 Failed"
assert alternate_valid_anagram("testcase", "casetest") == True, "Test Case 5 Failed"
