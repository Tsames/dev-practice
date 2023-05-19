import unittest
from removeDuplicates import removeDuplicates

class TestRotate(unittest.TestCase):
    
  def test_removeDuplicates(self):
    self.assertEquals(removeDuplicates([1,1]), 1)
    self.assertEquals(removeDuplicates([1,1,2]), 2)
    self.assertEquals(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), 5)

if (__name__ == '__main__'):
  unittest.main()        
        