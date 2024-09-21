package Sudoku;

import java.util.stream.IntStream;

public class Board {
    private TileGroup[] rows = IntStream.range(0, 9)
            .mapToObj(n -> new TileGroup(n, TileGroupType.row))
            .toArray(TileGroup[]::new);
    private TileGroup[] columns = IntStream.range(0, 9)
            .mapToObj(n -> new TileGroup(n, TileGroupType.column))
            .toArray(TileGroup[]::new);
    private TileGroup[] squares = IntStream.range(0, 9)
            .mapToObj(n -> new TileGroup(n, TileGroupType.square))
            .toArray(TileGroup[]::new);
    private Tile[] tiles = new Tile[81];

    public Board() {
        createBoard();
        pickRandomValidValues();
    };

    // Calculate a given Tile's Square based on its Id
    private int calculateSquare(int tileId) {
        return tileId / 9;
    }

    // Calculate a give Tile's postion in its Square
    private int calculatePositionInSquare(int tileId) {
        return tileId % 9;
    }

    // Calculate a given Tile's Column based on its Id
    private int calculateColumn(int tileId) {
        // Calculate the square's horizontal position
        int sqrModulo = (tileId / 9) % 3;

        // Calculate the number of columns over from the first tile in the square
        int tilesFromFirstTile = (tileId % 9) % 3;

        return (sqrModulo * 3) + tilesFromFirstTile;
    }

    // Calculate a given Tile's Row based on its Id
    private int calculateRow(int tileId) {
        // Calculate the square's vertical position
        int sqrRow = (tileId / 9) / 3;

        // Calculate the number of rows over from the first tile in the square
        int tileRow = (tileId % 9) / 3;

        return (sqrRow * 3) + tileRow;
    }

    public void createBoard() {
        // Create Tiles for the board
        for (int i = 0; i < 81; i++) {
            final int targetSquare = this.calculateSquare(i);
            final int targetColumn = this.calculateColumn(i);
            final int targetRow = this.calculateRow(i);

            final Tile newTile = new Tile(i, targetSquare, targetColumn, targetRow);

            squares[targetSquare].addTile(newTile, calculatePositionInSquare(i));
            columns[targetColumn].addTile(newTile, targetRow);
            rows[targetRow].addTile(newTile, targetColumn);
            tiles[i] = newTile;
        }
    }

    public void resetBoard() {
        for (int i = 0; i < 9; i++) {
            tiles[i].reset();
        }
    }

    private void pickRandomValidValues() {
        // Iterate through rows of our board - from top to bottom
        for (int r = 0; r < 9; r++) {
            TileGroup currentRow = rows[r];

            // Pick valid values for each tile in a row - iterating from left to right
            for (int t = 0; t < 9; t++) {

                // Find the tile with the fewest possible values within the current row that we are picking values for.
                // If all values are the same, then choose the left most Tile that does not yet have a value
                Tile selectedTile = currentRow.findTileWithFewestPossibleValues();

                // If there is a subset of possible values for this Tile that are shared among the remaining Tiles,
                // then remove those options as possible values for our choosen tile before picking a value.
                // This forces us to pick, if applicable, from values that are exclusively possible to that Tile.
                currentRow.removeSharedPossibleValues(selectedTile);

                // Pick a random value from the possible values for that tile and return it.
                int choosenValue = selectedTile.assignRandomPossibleValue();

                // Remove the chosen value from the set of possible values for all other tiles that share a TileGroup
                rows[selectedTile.getRow()].removePossibleValueFromOtherTilesInGroup(choosenValue,
                        selectedTile.getColumn());
                columns[selectedTile.getColumn()].removePossibleValueFromOtherTilesInGroup(choosenValue,
                        selectedTile.getRow());
                squares[selectedTile.getSquare()].removePossibleValueFromOtherTilesInGroup(choosenValue,
                        calculatePositionInSquare(selectedTile.getId()));
            }
        }
    }

    public void generateNewPuzzle() {
        resetBoard();
        pickRandomValidValues();
    }

    public void printBoard() {
        String board = "\n";
        for (int i = 0; i < 9; i++) {
            Tile[] tiles = this.rows[i].getTiles();
            for (int j = 0; j < 9; j++) {
                board += tiles[j].getDisplay() ? String.format("  %d", tiles[j].getValue()) : "  *";
                if (j == 2 || j == 5) {
                    board += "  |";
                } else if (j == 8) {
                    board += "\n";
                }
            }
            if (i == 2 || i == 5)
                board += "-----------|-----------|-----------\n";
        }
        System.out.println(board + "\n");
    }
}