'''
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
consisting of non-space characters only.


Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
'''

def length_of_last_word(s: str) -> int:
    last_word = ""
    
    for i in reversed(range(0,len(s))):
        if s[i] == " " and last_word != "":
            break
        elif not s[i] == " ":
            last_word = s[i] + last_word
    return len(last_word)
        

print(length_of_last_word("This is a common example"))
print(length_of_last_word(""))
print(length_of_last_word("    This is an edge case  with   weird spacing   "))

def more_compact_length_of_last_word(s: str) -> int:
    words = s.strip().split(" ")
    return 0 if not words else len(words[-1])

print(more_compact_length_of_last_word("This is a common example"))
print(more_compact_length_of_last_word(""))
print(more_compact_length_of_last_word("    This is an edge case  with   weird spacing   "))