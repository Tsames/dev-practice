from typing import Optional


class GraphNode:
    
    _connectedTo = set()
    
    def __init__(self, idx: int, val: Optional[int] = 0):
        self._idx = idx
        self.val = val

    def getIndex(self) -> int:
        return self._idx

    def getVal(self) -> int:
        return self._val

    def setVal(self, newVal: int) -> None:
        if 0 >= newVal or newVal > 9:
            return
        self._val = newVal

    def getConnections(self) -> set["GraphNode"]:
        return self._connectedTo.clone()

    def addConnection(self, node: "GraphNode") -> None:
        self._connectedTo.add(node)

    def removeConnection(self, node: "GraphNode") -> None:
        self._connectedTo.remove(node)

    def hasConnection(self, node: "GraphNode") -> bool:
        return node in self._connectedTo

    def __str__(self):
        return (
            "Node "
            + str(self.idx)
            + f" [{self.data}] -"
            + " Connected to: "
            + str([x.idx for x in self.connectedTo])
        )


class Graph:

    numNodes = 0
    allNodes = dict()

    def addNode(self, idx: int) -> Optional[GraphNode]:
        if idx in self.allNodes or idx < 0 or idx > 80:
            return None

        self.numNodes += 1
        newNode = GraphNode(idx)
        self.allNodes[idx] = newNode
        return newNode
    
    def setNodeVal(self, idx, val) -> Optional[GraphNode]:
        if idx not in self.allNodes:
            return None
        
        self.allNodes[idx].setVal(val)

    def addConnection(self, idxOne: int, idxTwo: int) -> None:
        if idxOne not in self.allNodes or idxTwo not in self.allNodes:
            return None

        nodeOne = self.allNodes[idxOne]
        nodeTwo = self.allNodes[idxTwo]

        nodeOne.addConnection(nodeTwo)
        nodeTwo.addConnection(nodeOne)

    def hasConnection(self, idxOne, idxTwo) -> bool:
        if (
            idxOne not in self.allNodes
            or idxTwo not in self.allNodes
            or idxOne == idxTwo
        ):
            return False

        nodeOne = self.allNodes[idxOne]
        nodeTwo = self.allNodes[idxTwo]

        return nodeOne.hasConnection(nodeTwo) and nodeTwo.hasConnection(nodeOne)
