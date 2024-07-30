package Sudoku;

public class Board {
    private TileGroup[] rows;
    private TileGroup[] columns;
    private TileGroup[] squares;
    private Tile[] tiles;

    public Board() {
        createNewBoard();
    };

    private void createNewBoard() {
        // Create Rows
        for (int i = 0; i < 9; i++) {
            TileGroupId newRowId = new TileGroupId(TileGroupType.row, i);
            TileGroup newRow = new TileGroup(newRowId);
            this.rows[i] = newRow;
        }

        // Create Columns
        for (int i = 0; i < 9; i++) {
            TileGroupId newColId = new TileGroupId(TileGroupType.column, i);
            TileGroup newCol = new TileGroup(newColId);
            this.columns[i] = newCol;
        }

        // Create Squares
        for (int i = 0; i < 9; i++) {
            TileGroupId newSqrId = new TileGroupId(TileGroupType.square, i);
            TileGroup newSqr = new TileGroup(newSqrId);
            this.squares[i] = newSqr;
        }

        // Create Tiles and Assign to proper TileGroups
        for (int i = 0; i < 80; i++) {
            Tile newTile = new Tile((byte) i, (byte) 0);
            tiles[i] = newTile;
            rows[newTile.row].addTile(newTile, newTile.col);
            columns[newTile.col].addTile(newTile, newTile.row);
            squares[newTile.sqr].addTile(newTile, newTile.calculateSqrPosition());
        }
    }
}
