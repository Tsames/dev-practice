from listNode import Node
'''
Given a linked list and a number, n, reverse the last n nodes of the list,
leaving any preceding nodes as they are.

For example, if the list is: 1 -> 2-> 3-> 5 -> 4 
and we pass this list and 2 as the number,
we get ``1 -> 2 -> 3 -> 4 -> 5` back as the result.

If there are fewer than n nodes in the list, reverse the whole thing.
'''

def reverseLastNNodes(head, n):

    '''
    We don't know how long the list is, and we cannot traverse the linked list in reverse
    One Solution we could pursue is iterating through the list once and counting how many nodes there are.
    '''
    
    nodesInList = 0
    curr = head
    
    while curr:
        nodesInList += 1
        curr = curr.next
       
    ''' 
    Now that we know how many nodes are in the list, we can use another variableto keep track of our second iteration through the list.
    If this visited variable is ever greater than nodesInList - n then we start reversing the list
    '''
    
    def reverseList(node):
        curr = node
        previousNode = None
    
        while curr:
            nextNode = curr.next
            
            curr.next = previousNode
            previousNode = curr
            curr = nextNode
        
        return previousNode
        
    # Reverse List if n is greater than or equal to the length of the list
    if nodesInList - n <= 0: return reverseList(head)
    
    
    # Otherwise, find the node in the list to begin reversing from
    curr = head
    visited = 0
    
    while curr:
        visited += 1
        if visited == nodesInList - n:
            curr.next = reverseList(curr.next)
            break
            
    return head
            
            
