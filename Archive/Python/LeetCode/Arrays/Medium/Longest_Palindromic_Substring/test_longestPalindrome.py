import unittest
from longestPalindrome import longestPalindrome

class TestRotate(unittest.TestCase):
    
  def test_lengthOfLongestSubstring(self):
    self.assertEquals(longestPalindrome("babad"), "bab")
    self.assertEquals(longestPalindrome("cbbd"), "bb")

if (__name__ == '__main__'):
  unittest.main()  