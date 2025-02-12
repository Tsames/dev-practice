class ListNode:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next

    def __str__(self):
        res = ""
        node = self
        while node:
            res += f"({node.val}) -> "
            node = node.next

        return res


def createFromList(nodes: list[int]) -> ListNode:
    root = ListNode(nodes.pop(0))
    curr = root

    for node in nodes:
        newNode = ListNode(node)
        curr.next = newNode
        curr = newNode

    return root
