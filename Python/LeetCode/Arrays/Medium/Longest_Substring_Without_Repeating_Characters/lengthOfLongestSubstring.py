# Given a string s, find the length of the longest substring without repeating characters.

# Example 1:
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:
# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:
# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.

# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
# Constraints:
# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.

def lengthOfLongestSubstring(s):
  output = 0

  for i in range(len(s)):
    pointer = i + 1 if i < len(s) - 1 else i
    helper = {s[i]: 1}

    while (pointer < len(s) and s[pointer] not in helper):
      helper[s[pointer]] = 1
      pointer += 1
    
    result = "".join(helper.keys())
    output = len(result) if len(result) > output else output

  return output

# Faster version from LeetCode:

# def lengthOfLongestSubstring(self, s):
  # used = {}
  # max_length = start = 0
  # for i, c in enumerate(s):
  #   if c in used and start <= used[c]:
  #     start = used[c] + 1
  #   else:
  #     max_length = max(max_length, i - start + 1)
  #   used[c] = i
  # return max_length