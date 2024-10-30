from math import floor
from typing import Optional
from random import choice
from sudoku_node import SudokuNode


class SudokuGraph:

    def __init__(self):
        self._allNodes = dict()
        self._createNodes()
        self._createConnections()

        assert self._checkEdges(), "Edges between SudokuNodes are not properly set."
        self._pickNewValue(0)

    def _createNodes(self) -> None:
        for idx in range(81):
            self._allNodes[idx] = SudokuNode(idx)

    def _createConnections(self) -> None:
        for i in range(81):
            self._connectRow(i)
            self._connectColumn(i)
            self._connectSquare(i)

    def _checkEdges(self) -> bool:
        # For each Node in our Graph
        for i in range(81):
            node = self._allNodes[i]
            edges = node.getEdges()

            # Check that each node has exactly 24 neighbors
            if len(edges) != 20:
                return False

            # Iterate through its neighbors
            for neighbor in edges:
                # If there is a neighbor that does not share either a row, column, or square - return false
                if (
                    self._calculateRow(neighbor.getIndex()) != self._calculateRow(i)
                    and self._calculateColumn(neighbor.getIndex())
                    != self._calculateColumn(i)
                    and self._calculateSquare(neighbor.getIndex())
                    != self._calculateSquare(i)
                ):
                    return False
        # Otherwise return True
        return True

    def _pickNewValue(self, idx: int) -> bool:
        # Base Case is we have successfully assigned values to every index, so bubble up True
        if idx == 81:
            return True

        # Get the node for the index
        node = self._allNodes[idx]
        possibleValues = [1,2,3,4,5,6,7,8,9]

        # Iterate up to nine times, once for each value
        for i in range(1, 10):
            randomValue = choice(possibleValues)
            possibleValues.remove(randomValue)
            
            # If we successfully set the value of that Node, make a recursive call to the next index.
            if node.setValue(randomValue):
                # If that recursive call returns True, return True
                if self._pickNewValue(idx + 1):
                    return True

        # Exhausted all possible options for current Node, roll back the call stack to previous Node
        node.resetValue()
        return False

    def _calculateRow(self, idx: int) -> int:
        """
        Rows indexes range from 0 -> 8
        """
        return floor(idx / 9)

    def _calculateColumn(self, idx: int) -> int:
        """
        Columns indexes range from 0 -> 8
        """
        return idx % 9

    def _calculateSquare(self, idx: int) -> int:
        """
        Squares indexes range from  0 -> 8.

        First term of the addition represents the number of squares the current square is from the left hand side of the board.
        For example, square 2 is 2 squares from the left hand side of the board.
        Its either 0, 1, or 2.

        The second term of the addition represents the number of squares the current square is from the top of the board.
        For example, square 3 is 1 square from the top of the board.
        Its either 0, 1, or 2 and is multiplied by 3 to accurately represent the index of the first square
        in that 'row of squares'.

         0 | 1 | 2
        ---|---|---
         3 | 4 | 5
        ---|---|---
         6 | 7 | 8
        """
        return floor((idx % 9) / 3) + floor((idx / 9) / 3) * 3

    def _connectRow(self, idxOne) -> None:
        """
        Connect the given node with all other nodes in its row that are of a greater index.
        """
        numGreaterIndexesInRow = 8 - (idxOne % 9)
        for idxTwo in range(idxOne + 1, idxOne + numGreaterIndexesInRow + 1):
            self._addEdge(idxOne, idxTwo)

    def _connectColumn(self, idxOne) -> None:
        """
        Connect the given node with all other nodes in its column that are of a greater index.
        """
        for idxTwo in range(idxOne + 9, 81, 9):
            self._addEdge(idxOne, idxTwo)

    def _connectSquare(self, idxOne) -> None:
        """
        Connect the given node with all other nodes in its square that are of a greater index.

        First find the first index within the square that the given index is in.
        Then assemble a list of all the indexes in the square based on that first index by adding nine for each new row within the square.
        Then iterate through the list making connections for each index larger than the current one that is not in the same row and column.
        """
        allIdxsInSquare = []
        rowIdx = self._calculateRow(idxOne)
        columnIdx = self._calculateColumn(idxOne)
        squareIdx = self._calculateSquare(idxOne)

        startingIdxInSquare = (floor(squareIdx / 3) * 27) + ((squareIdx % 3) * 3)
        for r in range(startingIdxInSquare, startingIdxInSquare + 19, 9):
            for c in range(3):
                allIdxsInSquare.append(r + c)

        for idxTwo in allIdxsInSquare:
            if (
                idxTwo > idxOne
                and self._calculateRow(idxTwo) != rowIdx
                and self._calculateColumn(idxTwo) != columnIdx
            ):
                self._addEdge(idxOne, idxTwo)

    def _addEdge(self, idxOne: int, idxTwo: int) -> None:
        if (
            idxOne == idxTwo
            or idxOne not in self._allNodes
            or idxTwo not in self._allNodes
        ):
            return None

        nodeOne = self._allNodes[idxOne]
        nodeTwo = self._allNodes[idxTwo]

        nodeOne.addEdge(nodeTwo)
        nodeTwo.addEdge(nodeOne)

    def getNode(self, idx: int) -> Optional[SudokuNode]:
        return self._allNodes[idx] if idx in self._allNodes else None

    def hasEdge(self, idxOne, idxTwo) -> Optional[bool]:
        if (
            idxOne == idxTwo
            or idxOne not in self._allNodes
            or idxTwo not in self._allNodes
        ):
            return None

        nodeOne = self._allNodes[idxOne]
        nodeTwo = self._allNodes[idxTwo]

        return nodeOne.hasEdge(nodeTwo) and nodeTwo.hasEdge(nodeOne)

    def __str__(self):
        board = ""
        for i in range(81):
            curr = self._allNodes[i]
            row = self._calculateRow(i)
            col = self._calculateColumn(i)

            board += f"  {curr.getValue()}" if curr.visible else "  *"

            if col == 2 or col == 5:
                board += "  |"
            elif col == 8:
                board += "\n"
                if row == 2 or row == 5:
                    board += "-----------|-----------|-----------\n"

        return board
