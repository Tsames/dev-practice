from listNode import Node
'''
Note: Your solution should have O(l.length) time complexity and O(1) space complexity
Given a singly linked list, reverse and return it.

Example
For l = [1, 2, 3, 4, 5],
the output should be solution(l) = [5, 4, 3, 2, 1].

'''

def reverseList(head):
    curr = head
    previousNode = None
    
    while curr:
        nextNode = curr.next
        
        curr.next = previousNode
        previousNode = curr
        curr = nextNode
    
    return previousNode

# Test One
testOneNodeHead = Node(1)
testOneNodePointer = testOneNodeHead
for i in range(2,5):
    newNode = Node(i)
    testOneNodePointer.next = newNode
    testOneNodePointer = newNode
    
print(reverseList(testOneNodeHead))

# Test Two
testTwoNodeHead = Node()
print(reverseList(testTwoNodeHead))

# Test Three
testThreeNodeHead = Node(1)
print(reverseList(testThreeNodeHead))