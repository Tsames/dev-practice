import unittest
from isValidBST import isValidBST

#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTree, BinaryTreeNode

class TestIsValidBST(unittest.TestCase):
    
  def test_isValidBST(self):
    self.assertEqual(BinaryTree([2,1,3]).isValidBST(), True)
    self.assertEqual(BinaryTree([5,1,4,None,None,3,6]).isValidBST(), False)

if (__name__ == '__main__'):
  unittest.main()