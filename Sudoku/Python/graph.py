from typing import Optional
from graph_node import GraphNode


class Graph:

    _allNodes = dict()

    def addNode(self, idx: int) -> Optional[GraphNode]:
        if idx < 0 or idx > 80 or idx in self._allNodes:
            return None

        newNode = GraphNode(idx)
        self._allNodes[idx] = newNode
        return newNode

    def getNode(self, idx: int) -> Optional[GraphNode]:
        return self._allNodes[idx] if idx in self._allNodes else None

    def setNodeVal(self, idx, val) -> Optional[GraphNode]:
        if idx not in self._allNodes:
            return None

        self._allNodes[idx].setVal(val)

    def addEdge(self, idxOne: int, idxTwo: int) -> None:
        if (
            idxOne == idxTwo
            or idxOne not in self._allNodes
            or idxTwo not in self._allNodes
        ):
            return None

        nodeOne = self._allNodes[idxOne]
        nodeTwo = self._allNodes[idxTwo]

        nodeOne.addConnection(idxTwo)
        nodeTwo.addConnection(idxOne)

    def hasConnection(self, idxOne, idxTwo) -> Optional[bool]:
        if (
            idxOne == idxTwo
            or idxOne not in self._allNodes
            or idxTwo not in self._allNodes
        ):
            return None

        nodeOne = self._allNodes[idxOne]
        nodeTwo = self._allNodes[idxTwo]

        return nodeOne.hasConnection(nodeTwo) and nodeTwo.hasConnection(nodeOne)
