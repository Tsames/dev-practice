from typing import Optional
from graph import Graph
import math


class Sudoku:

    def __init__(self):
        self._board = Graph()
        self._createNodes()
        self._createConnections()
        print(self._checkConnections())

    def _calculateRow(self, idx: int) -> int:
        """
        Rows indexes range from 0 -> 8
        """
        return math.floor(idx / 9)

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
        return math.floor((idx % 9) / 3) + math.floor((idx / 9) / 3) * 3

    def _createNodes(self) -> None:
        for i in range(81):
            self._board.addNode(i)

    def _createConnections(self) -> None:
        for i in range(81):
            self._connectRow(i)
            self._connectColumn(i)
            self._connectSquare(i)

    def _checkConnections(self) -> bool:
        # For each Node in our Graph
        for i in range(81):
            node = self._board.getNode(i)
            # Iterate through its connections
            for neighbor in node.getConnections():
                # If there is a connection that does not share a row, column, or square - return false
                if (
                    self._calculateRow(neighbor) != self._calculateRow(i)
                    and self._calculateColumn(neighbor) != self._calculateColumn(i)
                    and self._calculateSquare(neighbor) != self._calculateSquare(i)
                ):
                    return False
        # Otherwise return True
        return True
    
    def _connectRow(self, idxOne) -> None:
        """
        Connect the given node with all other nodes in its row that are of a greater index.
        """
        numGreaterIndexesInRow = 8 - (idxOne % 9)
        for idxTwo in range(idxOne + 1, idxOne + numGreaterIndexesInRow + 1):
            self._board.addEdge(idxOne, idxTwo)

    def _connectColumn(self, idxOne) -> None:
        """
        Connect the given node with all other nodes in its column that are of a greater index.
        """
        for idxTwo in range(idxOne + 9, 81, 9):
            self._board.addEdge(idxOne, idxTwo)

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

        startingIdxInSquare = (math.floor(squareIdx / 3) * 27) + ((squareIdx % 3) * 3)
        for r in range(startingIdxInSquare, startingIdxInSquare + 19, 9):
            for c in range(3):
                allIdxsInSquare.append(r + c)

        for idxTwo in allIdxsInSquare:
            if (
                idxTwo > idxOne
                and self._calculateRow(idxTwo) != rowIdx
                and self._calculateColumn(idxTwo) != columnIdx
            ):
                self._board.addEdge(idxOne, idxTwo)


sudoku = Sudoku()
