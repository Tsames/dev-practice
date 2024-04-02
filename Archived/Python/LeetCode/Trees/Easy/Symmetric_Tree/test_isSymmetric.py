import unittest
from isSymmetric import isSymmetric

#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Binary_Tree import BinaryTree, BinaryTreeNode

class TestIsValidBST(unittest.TestCase):
    
  def test_isValidBST(self):
    self.assertEqual(BinaryTree([1,2,2,3,4,4,3]).isSymmetric(), True)
    self.assertEqual(BinaryTree([1,2,2,None,3,None,3]).isSymmetric(), False)

if (__name__ == '__main__'):
  unittest.main()