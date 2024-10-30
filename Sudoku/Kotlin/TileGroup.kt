package Sudoku;

internal enum class TileGroupType {
    row,
    column,
    square
}

internal class TileGroup(val id: Int, val type: TileGroupType) {
    private val tiles = arrayOfNulls<Tile>(9)

    fun addTile(tile: Tile, position: Int) {
        tiles[position] = tile
    }

    fun isValid(): Boolean {
        val values = HashSet(mutableListOf(1, 2, 3, 4, 5, 6, 7, 8, 9))
        for (tile in tiles) {
            if (!values.remove(tile.value)) {
                return false
            }
        }
        return values.size == 0
    }    

    // fun findTileWithFewestPossibleValues(): Tile? {
    //     var fewestPossibleValues = 10
    //     var tileWithFewestPossibleOptions: Tile? = null
    //     for (tile in tiles) {
    //         if (tile.getValue() === 0 && tile!!.possibleValues.size < fewestPossibleValues) {
    //             fewestPossibleValues = tile.possibleValues.size
    //             tileWithFewestPossibleOptions = tile
    //         }
    //     }
    //     println(
    //         String.format(
    //             "Selecting a value for Tile %d in row %d",
    //             tileWithFewestPossibleOptions!!.column, tileWithFewestPossibleOptions.row
    //         )
    //     )
    //     return tileWithFewestPossibleOptions
    // }

    // fun removeSharedPossibleValues(targetTile: Tile) {
    //     val sharedPossibleValues = HashSet(mutableListOf(1, 2, 3, 4, 5, 6, 7, 8, 9))
    //     for (tile in tiles) {
    //         if (tile.getValue() === 0) {
    //             sharedPossibleValues.retainAll(tile!!.possibleValues)
    //         }
    //     }
    //     System.err.println("Removing the following shared values from the possible options")
    //     println(sharedPossibleValues)
    //     if (sharedPossibleValues.size != targetTile.possibleValues.size) {
    //         targetTile.possibleValues.removeAll(sharedPossibleValues)
    //     }
    // }

    fun addPossibleValueToGroup(value: Int) {
        for (i in 0..8) {
            tiles[i]!!.addPossibleValue(value)
        }
    }

    fun removePossibleValueFromGroup(value: Int) {
        for (i in 0..8) {
            tiles[i]!!removePossibleValue(value)
        }
    }
}

