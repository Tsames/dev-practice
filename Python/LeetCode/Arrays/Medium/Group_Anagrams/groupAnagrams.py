# Given an array of strings strs, group the anagrams together. You can return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
# typically using all the original letters exactly once.

# Example 1:
# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

# Example 2:
# Input: strs = [""]
# Output: [[""]]

# Example 3:
# Input: strs = ["a"]
# Output: [["a"]]
 
# Constraints:
# 1 <= strs.length <= 104
# 0 <= strs[i].length <= 100
# strs[i] consists of lowercase English letters.

def groupAnagrams(strs):
  strings = {}

  for ele in strs:
    newList = list(ele)
    newList.sort()
    key = "".join(newList)
    if (key in strings):
      strings[key].append(ele)
    else:
      strings[key] = [ele]

  output = []
  for key in strings:
    output.append(strings[key])

  return output

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))