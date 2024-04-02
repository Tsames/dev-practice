import unittest
from rotate import rotate

class TestRotate(unittest.TestCase):
    
  def test_rotate(self):
    self.assertEqual(rotate([1,2,3,4,5,6,7], 3), [5,6,7,1,2,3,4])
    self.assertEqual(rotate([-1,-100,3,99], 2), [3,99,-1,-100])
        

if (__name__ == '__main__'):
  unittest.main()        
        
