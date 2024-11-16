class TreeNode:
    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def __str__(self):
        from collections import deque
        q = deque([self])
        res = ""

        while q:
            level = ""
            for i in range(len(q)):
                curr = q.popleft()
                if not curr:
                    level += "None  "
                    continue
                else:
                    level += f"{curr.value}  "
                    q.append(curr.left)
                    q.append(curr.right)
            res += level + "\n"
        
        return res


def createFromList(nodes: list[int]) -> TreeNode:
    if not nodes:
        return None

    root = TreeNode(nodes[0])
    q = [root]
    i = 1

    while i < len(nodes):
        curr = q.pop(0)
        if curr:
            if nodes[i]:
                curr.left = TreeNode(nodes[i])
                q.append(curr.left)
            else:
                curr.left = nodes[i]
            i += 1
        if i < len(nodes) and curr:
            if nodes[i]:
                curr.right = TreeNode(nodes[i])
                q.append(curr.right)
            else:
                curr.right = nodes[i]
            i += 1

    return root


tree = createFromList([1,2,3,None,4,None,None])
print(tree)