class Node:
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next
        
    def __str__(self):
        res = ""
        node = self
        while (node):
            res += f"({node.data}) -> "
            node = node.next
        
        return res