import unittest
from merge import mergeSortedArray

class TestMergeSortedArray(unittest.TestCase):

  def test_addTwoNumbers(self):
    self.assertEqual(mergeSortedArray([1,2,3,0,0,0], [2,5,6], 3, 3), [1,2,2,3,5,6])
    self.assertEqual(mergeSortedArray([1], [], 1, 0), [1])
    self.assertEqual(mergeSortedArray([0], [1], 0, 1), [1])
    self.assertEqual(mergeSortedArray([0,0,0,0,0], [1,2,3,4,5], 0, 5), [1,2,3,4,5])
    self.assertEqual(mergeSortedArray([0,0,3,0,0,0,0,0,0], [-1,1,1,1,2,3], 3, 6), [0, 0, -1, 1, 1, 1, 2, 3, 3])
    self.assertEqual(mergeSortedArray([4,0,0,0,0,0], [1,2,3,5,6], 1, 5), [1, 2, 3, 4, 5, 6])

if (__name__ == '__main__'):
  unittest.main()