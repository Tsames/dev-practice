'''
https://neetcode.io/problems/string-encode-and-decode

Encode and Decode Strings
Design an algorithm to encode a list of strings to a single string.
The encoded string is then decoded back to the original list of strings.
Please implement encode and decode

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Example 2:
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]

Constraints:
0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
'''

class Solution:
    '''
    Targeting O(m) time complexity where m is the total length of all strings in strs.
    There are not any restrictions on what our encoded string has to look like other than a string containing all the strings in strs.
    Is the simplest solution not to add all of the strs in strs into one big string?

    But, since we are confined to not use any state, how would we decode this string?
    We can't use a single character as a delimiter, since it could be part of the words itself.

    Instead, we need a way to write state into our string.
    So instead of a single delimiter, we write the length of our string followed by a delimiter before the original string itself.
    This way we will only ever 'read' the length of the string information and the delimiter.
    Since as soon as we encounter the length and then the delimiter, for the next x characters we will put that into our output.
    Then we will be guaranteed to encounter a new length followed by a new delimiter.
    '''

    def encode(self, strs: list[str]) -> str:
        res = ""
        for word in strs:
            res += f"{len(word)}${word}"
        return res

    def decode(self, s: str) -> list[str]:
        res, i = [], 0

        while i < len(s):
            j = i
            while s[j] != "$":
                j += 1
            length = int(s[i:j])
            res.append(s[j + 1: j + 1 + length])
            i = j + 1 + length

        print(res)
        return res

solution = Solution()
assert solution.decode(solution.encode(["neet", "code", "love", "you"])) == ["neet", "code", "love", "you"], "Test one failed."
assert solution.decode(solution.encode(["we", "say", ":", "yes"])) == ["we", "say", ":", "yes"], "Test two failed."
print("All tests passed!")
