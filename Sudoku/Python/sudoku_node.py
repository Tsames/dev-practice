from typing import Optional


class SudokuNode:

    def __init__(self, idx: int, value: Optional[int] = 0):
        self._idx = idx
        self._value = value
        self.visible = True
        self._connectedTo = set()

    def getIndex(self) -> int:
        return self._idx

    def getValue(self) -> int:
        return self._value

    def setValue(self, newValue: int) -> bool:
        assert (
            newValue > 0 and newValue <= 9
        ), f"SudokuNode {self._idx}'s value cannot be set to a value other than 1-9"

        for node in self._connectedTo:
            if node.getValue() == newValue:
                return False

        self._value = newValue
        return True

    def resetValue(self) -> None:
        self._value = 0

    def getEdges(self) -> set["SudokuNode"]:
        return self._connectedTo.copy()

    def addEdge(self, node: "SudokuNode") -> None:
        self._connectedTo.add(node)

    def removeEdge(self, node: "SudokuNode") -> None:
        self._connectedTo.remove(node)

    def hasEdge(self, node: "SudokuNode") -> bool:
        return node in self._connectedTo

    def __str__(self):
        allConnections = list(self._connectedTo)
        allConnections.sort()
        return (
            "Node "
            + str(self._idx)
            + f" [{self.value}] -"
            + " Connected to: "
            + str(allConnections)
        )
