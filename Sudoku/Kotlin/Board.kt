package Sudoku;

class Board {
    private val rows: Array<TileGroup> = Array(9) { TileGroup(it, TileGroupType.row) }
    private val columns: Array<TileGroup> = Array(9) { TileGroup(it, TileGroupType.column) }
    private val squares: Array<TileGroup> = Array(9) { TileGroup(it, TileGroupType.square) }
    private val tiles: Array<Tile?> = arrayOfNulls(81)

    init {
        createTiles()
        pickTileValues()
    }

    // Calculate a given Tile's Row based on its Id
    private fun calculateRow(tileId: Int): Int {
        return tileId / 9
    }

    // Calculate a given Tile's Column based on its Id
    private fun calculateColumn(tileId: Int): Int {
        return tileId % 9
    }

    // Calculate a given Tile's Square based on its Id
    private fun calculateSquare(tileId: Int): Int {
        val horizontalSquarePosition = (tileId % 9) / 3
        val verticalSquarePosition = (tileId / 9) / 3
        return horizontalSquarePosition + (verticalSquarePosition * 3)
    }

    // Calculate a given Tile's position in its Square based on its Id
    private fun calculatePositionInSquare(tileId: Int): Int {
        val horizontalModulo = (tileId % 9) % 3
        val verticalModulo = (tileId / 9) % 3
        return horizontalModulo + (verticalModulo * 3)
    }

    fun createTiles() {
        for (i in 0 until 81) {
            val targetSquare = calculateSquare(i)
            val targetColumn = calculateColumn(i)
            val targetRow = calculateRow(i)

            val newTile = Tile(i, targetSquare, targetColumn, targetRow)

            squares[targetSquare].addTile(newTile, calculatePositionInSquare(i))
            columns[targetColumn].addTile(newTile, targetRow)
            rows[targetRow].addTile(newTile, targetColumn)
            tiles[i] = newTile
        }
    }

    fun resetTiles() {
        for (i in tiles.indices) {
            tiles[i]?.reset() // Use safe call in case the tile is null
        }
    }

    private fun pickValue(tileIndex: Int): Boolean {
        val givenTile = tiles[tileIndex] ?: return false

        if (givenTile.possibleValues.isEmpty()) {
            return false
        }

        if (tileIndex == 81) {
            return true
        }

        attemptedValues = []
        

        return false // Return false for now as the recursive logic is incomplete.
    }

    // fun pickValue(tileIndex: Int): Int? {
    //     if (tileIndex > 80) {
    //         return null
    //     }

    //     val selectedTile = tiles[tileIndex] ?: return null

    //     if (selectedTile.possibleValues.isEmpty()) {
    //         return null
    //     }

    //     val chosenValue = selectedTile.assignValue() ?: return null

    //     rows[selectedTile.row].removePossibleValueFromGroup(chosenValue)
    //     columns[selectedTile.column].removePossibleValueFromGroup(chosenValue)
    //     squares[selectedTile.square].removePossibleValueFromGroup(chosenValue)

    //     pickValue(tileIndex + 1)

    //     return chosenValue
    // }

    fun generateNewPuzzle() {
        resetTiles()
        // pickTileValues(); // Uncomment if needed
    }

    fun isValid(): Boolean {
        for (i in 0 until 9) {
            if (!rows[i].isValid() || !columns[i].isValid() || !squares[i].isValid()) {
                return false
            }
        }
        return true
    }

    fun printBoard() {
        val board = StringBuilder("\n")
        for (i in 0 until 9) {
            val tilesInRow = rows[i].getTiles()
            for (j in 0 until 9) {
                board.append(if (tilesInRow[j].display) String.format("  %d", tilesInRow[j].value) else "  *")
                when (j) {
                    2, 5 -> board.append("  |")
                    8 -> board.append("\n")
                }
            }
            if (i == 2 || i == 5) {
                board.append("-----------|-----------|-----------\n")
            }
        }
        println(board.toString() + "\n")
    }
}