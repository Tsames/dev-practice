import unittest
from longestPalindrome import longestPalindrome

class TestRotate(unittest.TestCase):
    
  def test_lengthOfLongestSubstring(self):
    self.assertEquals(longestPalindrome("babad"), "bab")
    self.assertEquals(longestPalindrome("cbbd"), "bb")
    
    # self.assertEquals(longestPalindrome("b"), 1)
    # self.assertEquals(longestPalindrome("abcabcbb"), 3)
    # self.assertEquals(longestPalindrome(""), 0)



if (__name__ == '__main__'):
  unittest.main()  