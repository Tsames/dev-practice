import unittest
from oddEvenList import slowOddEvenList, fastOddEvenList

#Import Linked List Data Structure
import sys
sys.path.append("/Users/tomames/dev/practice_repo/Python/Data_Structures/")
from Linked_Lists import ListNode, LinkedList

LinkedList([1,2,3,4,5]).head.printFromHere()

class TestOddEvenList(unittest.TestCase):
  
  def test_slowOddEvenList(self):
    self.assertEqual(LinkedList([1,3,5,2,4]).head.printFromHere(),slowOddEvenList(LinkedList([1,2,3,4,5]).head).printFromHere())
    self.assertEqual(LinkedList([2,3,6,7,1,5,4]).head.printFromHere(),slowOddEvenList(LinkedList([2,1,3,5,6,4,7]).head).printFromHere())

  def test_fastOddEvenList(self):
    self.assertEqual(LinkedList([1,3,5,2,4]).head.printFromHere(),fastOddEvenList(LinkedList([1,2,3,4,5]).head).printFromHere())
    self.assertEqual(LinkedList([2,3,6,7,1,5,4]).head.printFromHere(),fastOddEvenList(LinkedList([2,1,3,5,6,4,7]).head).printFromHere())

if (__name__ == '__main__'):
  unittest.main()