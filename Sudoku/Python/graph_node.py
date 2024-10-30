from typing import Optional

class GraphNode:
    
    def __init__(self, idx: int, val: Optional[int] = 0):
        self._idx = idx
        self.val = val
        self._connectedTo = set()

    def getIndex(self) -> int:
        return self._idx

    def getVal(self) -> int:
        return self._val

    def setVal(self, newVal: int) -> None:
        if 0 >= newVal or newVal > 9:
            return
        self._val = newVal

    def getConnections(self) -> set[int]:
        return self._connectedTo.copy()

    def addConnection(self, node: int) -> None:
        self._connectedTo.add(node)

    def removeConnection(self, node: int) -> None:
        self._connectedTo.remove(node)

    def hasConnection(self, node: int) -> bool:
        return node in self._connectedTo

    def __str__(self):
        allConnections = list(self._connectedTo)
        allConnections.sort()
        return (
            "Node "
            + str(self._idx)
            + f" [{self.val}] -"
            + " Connected to: "
            + str(allConnections)
        )
