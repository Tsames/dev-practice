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

  longest = ""

  for i, c in enumerate(str):

    #Check that the length of the longest palindrome is not greater than the number of remaining indicies.
    if (len(longest) > len(str) - (i + 1)):
      print(f"The longest palindrome so far is {longest} with a length of {len(longest)}. Stopping function at index {i} in {str}.")
      break

    helperPointer = len(str) - 1

    #Iterate from the back of the string, looking for a value at the new index that matches c
    while (helperPointer > i and helperPointer - i > len(longest)):

      #When you find one, execute a third iteration.
      if (str[pointerLast] == c):

        check = True
        while(check and pointerStart < pointerLast):
          if (str[pointerStart] != str[pointerLast]):
            check = False
          pointerStart += 1
          pointerLast -= 1
