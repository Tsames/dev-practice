import unittest
from addTwoNumbers import addTwoNumbers

#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Linked_Lists import ListNode, LinkedList

class TestAddTwoNumbers(unittest.TestCase):

  def test_addTwoNumbers(self):
    self.assertEqual(LinkedList([7,0,8]).__str__(), addTwoNumbers(LinkedList([2,4,3]), LinkedList([5,6,4])).__str__())
    self.assertEqual(LinkedList([0]).__str__(), addTwoNumbers(LinkedList([0]), LinkedList([0])).__str__())
    self.assertEqual(LinkedList([8,9,9,9,0,0,0,1]).__str__(), addTwoNumbers(LinkedList([9,9,9,9,9,9,9]), LinkedList([9,9,9,9])).__str__())

if (__name__ == '__main__'):
  unittest.main()