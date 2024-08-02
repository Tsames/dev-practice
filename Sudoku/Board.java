package Sudoku;

public class Board {
    private TileGroup[] rows = new TileGroup[9];
    private TileGroup[] columns = new TileGroup[9];
    private TileGroup[] squares = new TileGroup[9];
    private Tile[] tiles = new Tile[81];

    public Board() {
        TileValue[] valueArray = new TileValue[81];

        for (int i = 0; i < 81; i++) {
            valueArray[i] = new TileValue(i % 9, false);
        }

        valueArray[2] = new TileValue(9, true);

        createNewBoard(valueArray);
    };

    private void createNewBoard(TileValue[] valueArray) {
        // Create Rows, Columns, and Squares
        for (int i = 0; i < 9; i++) {
            this.rows[i] = new TileGroup(new TileGroupId(TileGroupType.row, i));
            this.columns[i] = new TileGroup(new TileGroupId(TileGroupType.column, i));
            this.squares[i] = new TileGroup(new TileGroupId(TileGroupType.square, i));
        }

        // Create Tiles and Assign to proper TileGroups
        for (int i = 0; i < 81; i++) {
            // System.out.println(String.format("Creating Tile %d...", i));
            Tile newTile = new Tile(i, valueArray[i]);
            tiles[i] = newTile;
            // System.out.println(String.format("\tAssigning Tile to position %d in Row
            // %d,", newTile.col, newTile.row));
            rows[newTile.getRow()].addTile(newTile, newTile.getColumn());
            // System.out.println(
            // String.format("\tAssigning Tile to position %d in Column %d...", newTile.row,
            // newTile.col));
            columns[newTile.getColumn()].addTile(newTile, newTile.getRow());
            // System.out.println(String.format("\tAssigning Tile to position %d in Square
            // %d...",
            // newTile.id % 9, newTile.sqr));
            squares[newTile.getSquare()].addTile(newTile, newTile.getPositionInSquare());
        }
    }

    public void printBoard() {
        String board = "\n";
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                Tile targetTile = this.rows[i].tiles[j];
                board += targetTile.getDisplay() ? String.format("  %d", targetTile.getValue()) : "  *";
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