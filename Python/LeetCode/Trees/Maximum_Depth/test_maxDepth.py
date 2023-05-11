import unittest
from maxDepth import maxDepth

#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTreeNode, BinaryTree

class TestMaxDepth(unittest.TestCase):

  def setUp(self):
    self.treeOne = BinaryTree([3,9,20,None,None,15,7])
    self.treeTwo = BinaryTree([1,None,2])

  def test_maxDepth(self):
    self.assertEqual(self.treeOne.maxDepth(), 3)
    self.assertEqual(self.treeTwo.maxDepth(), 2)

if (__name__ == '__main__'):
  unittest.main()