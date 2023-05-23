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
  pass

  #The Longest Substring Palindrome possible would be the entire string. This means that the first n/2
  #characters would form the first half of the pattern where n is the length of the string.

  #To make a palindrome from any one index there would have to be that same character later in the array.
  #We could use a pointer that resets on each iteration to try and find the biggest index where that character appears again.

  #Iterate through array
  #If we are at an index

  longest = ""

  for i, c in enumerate(str):
    
    #Find the latest position where the character is repeated
    pointerLast = len(str) - 1
    pointerStart = i
    while (str[pointerLast] != c or pointerLast <= i):
      pointerLast -= 1

    check = True
    #Check if this is a palindrome:
    while (check and pointerStart <= pointerLast):
      if (str[pointerStart] != str[pointerLast]):
        check = False
      pointerStart += 1
      pointerLast -= 1
    if check
