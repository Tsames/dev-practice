from typing import Optional


class GraphNode:
    def __init__(self, idx: int, data: Optional[int] = 0):
        self.idx = idx
        self.data = data
        self._connectedTo = set()

    def addConnection(self, node: "GraphNode") -> None:
        self._connectedTo.add(node)
        node._connectedTo.add(self)

    def removeConnection(self, node: "GraphNode") -> None:
        self._connectedTo.remove(node)
        node._connectedTo.remove(self)
        
    def getConnections(self) -> set["GraphNode"]:
        return self._connectedTo.clone()

    def __str__(self):
        return (
            "Node "
            + str(self.idx)
            + f" [{self.data}] -"
            + " Connected to: "
            + str([x.idx for x in self.connectedTo])
        )

