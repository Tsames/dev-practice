package Sudoku;

public class Board {
    private TileGroup[] rows = new TileGroup[9];
    private TileGroup[] columns = new TileGroup[9];
    private TileGroup[] squares = new TileGroup[9];
    private Tile[] tiles = new Tile[81];

    public Board() {
        createNewBoard();
    };

    private void createNewBoard() {
        // Create Rows, Columns, and Squares
        for (int i = 0; i < 9; i++) {
            TileGroupId newRowId = new TileGroupId(TileGroupType.row, i);
            TileGroupId newColId = new TileGroupId(TileGroupType.column, i);
            TileGroupId newSqrId = new TileGroupId(TileGroupType.square, i);
            TileGroup newRow = new TileGroup(newRowId);
            TileGroup newCol = new TileGroup(newColId);
            TileGroup newSqr = new TileGroup(newSqrId);
            this.rows[i] = newRow;
            this.columns[i] = newCol;
            this.squares[i] = newSqr;
        }

        // Create Tiles and Assign to proper TileGroups
        for (int i = 0; i < 81; i++) {
            // System.out.println(String.format("Creating Tile %d...", i));
            Tile newTile = new Tile((byte) i, (byte) 0);
            tiles[i] = newTile;
            // System.out.println(String.format("\tAssigning Tile to position %d in Row
            // %d,", newTile.col, newTile.row));
            rows[newTile.row].addTile(newTile, newTile.col);
            // System.out.println(
            // String.format("\tAssigning Tile to position %d in Column %d...", newTile.row,
            // newTile.col));
            columns[newTile.col].addTile(newTile, newTile.row);
            // System.out.println(String.format("\tAssigning Tile to position %d in Square
            // %d...",
            // newTile.id % 9, newTile.sqr));
            squares[newTile.sqr].addTile(newTile, newTile.id % 9);
        }
    }

    public void printBoard() {
        String board = "\n";
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                board += String.format("  %d", this.rows[i].tiles[j].value);
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
