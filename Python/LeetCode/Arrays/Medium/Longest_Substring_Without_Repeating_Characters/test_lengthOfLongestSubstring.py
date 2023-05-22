import unittest
from lengthOfLongestSubstring import lengthOfLongestSubstring

class TestRotate(unittest.TestCase):
    
  def test_lengthOfLongestSubstring(self):
    self.assertEquals(lengthOfLongestSubstring("pwwkew"), 3)
    self.assertEquals(lengthOfLongestSubstring("bbbbb"), 1)
    self.assertEquals(lengthOfLongestSubstring("b"), 1)
    self.assertEquals(lengthOfLongestSubstring("abcabcbb"), 3)
    self.assertEquals(lengthOfLongestSubstring(""), 0)



if (__name__ == '__main__'):
  unittest.main()  