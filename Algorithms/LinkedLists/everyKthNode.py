from listNode import Node
'''
❓ PROMPT
Given a linked list and a target k, return a linked list containing every kth element.

Example(s)
head = 1 -> 3 -> 6 -> 2 -> 8 -> 9
everyKthNode(head, 3) == "6 -> 9"

Are we modifying the original list? Or are we returning a brand new list?
Can we assume that the length given list, lets call it l, will be divisible by k?


🔎 EXPLORE
List your assumptions & discoveries:
 
I am going to assume that we should return a new list.

Insightful & revealing test cases:
 
What if l, the length of the given list is less than k? Do we return None?

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
Iterate through the linked list and keep track of the number of nodes you've visited.
If the number of nodes you've visisted modulo k is 0, create a new node from the current node and append it to the result head

📆 PLAN
Outline of algorithm #: 
 
Declalre a decoy result head
Declare a visited int variable

While node is not None:
Check if visited modulo k is 0, if it isn't set node = node.next
If it is, then create a new Node from the data property of the current node that we are iterating over
and append it to our result, 
 

🛠️ IMPLEMENT
function everyKthNode(node, target) {
def everyKthNode(node: Node, target: int) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

def everykthNode(node: Node, target: int) -> Node:
    
    res = Node()
    resPointer = res
    visited = 0
    
    while(node):
        visited += 1
        if visited % target == 0:
            newNode = Node(node.data)
            resPointer.next = newNode
            resPointer = newNode
        node = node.next
        
    if res.next == None: return None
    return res.next

testNodeHead = Node(1)
testNodePointer = testNodeHead
for i in range(2,10):
    newNode = Node(i)
    testNodePointer.next = newNode
    testNodePointer = newNode

print(everykthNode(testNodeHead,1))
print(everykthNode(testNodeHead,20))
print(everykthNode(testNodeHead,3))
print(everykthNode(None, 1))