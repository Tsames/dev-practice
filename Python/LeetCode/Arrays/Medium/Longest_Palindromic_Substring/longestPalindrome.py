# Given a string s, return the longest palindromic substring in s.

# Example 1:
# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.

# Example 2:
# Input: s = "cbbd"
# Output: "bb"
 
# Constraints:
# 1 <= s.length <= 1000
# s consist of only digits and English letters.

def longestPalindrome(str):
  # Similar to the length of longest substring problem, but a palindrome means that order
  # matters which makes a dictionary inadequate on its own. 

  #This problem is complicated by identifying the pivot. The palindrome could have a repeating pattern such as
  # "ababab-c-bababa" so its not enough to merely identify if a character that previously appeared in the patern is appearing again.

  #We could iterate through the array (i).
    #First, check and see if the length of the longest palindrome so far > the remaining number of indicies
      #If so, return the longest palindrome so far
    #Second, iterate from the back of array (j) searching for an occurence (str[j]) of the value at the current index (str[i]).
      #Once found, set pointers at i and j. A palindrome is a mirrored string, so check if the values match for both pointer.
      #If they don't, then find the next occurence of the value at the current index - if there are no more, continue in the original loop.
      #If they do match, then move the pointers and compare again. Stop checking the pointers when they either cross or are at the same index.
      #If it makes it through the second loops then we've found a palindrome.

  longest = "" if len(str) <= 0 else str[0]

  for i, c in enumerate(str):

    temp = helper(str,i,i)
    if (len(temp) > len(longest)):
      longest = temp

    temp = helper(str, i, i+1)
    if(len(temp) > len(longest)):
      longest = temp

  return longest

def helper(s, inner, outter):
  while (inner > 0 and outter < len(s) and s[inner] == s[outter]):
    print(f"Checking from value(index): {s[inner]}({inner}) to {s[outter]}({outter}).")
    inner -= 1; outter += 1
  print(f"Returning palindrome: {s[inner+1:outter]}")
  return s[inner + 1:outter]


print(longestPalindrome("bb"))