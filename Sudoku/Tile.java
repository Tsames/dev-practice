package Sudoku;

public class Tile {
    public final int id;
    public int value;
    public final int sqr;
    public final int col;
    public final int row;

    public Tile(int tileId, int value) {
        this.id = tileId;
        this.value = value;
        this.sqr = calculateSqr(tileId);
        this.col = calculateCol(tileId);
        this.row = calculateRow(tileId);
    }

    public Tile(int tileId) {
        this(tileId, (int) 0);
    }

    private int calculateSqr(int tileId) {
        return (int) (tileId / 9);
    }

    private int calculateCol(int tileId) {
        // Calculate the square's column
        int sqrModulo = (int) (this.sqr % 3);

        // Calculate the number of columns over from the first tile in the square
        int tilesFromFirstTile = (int) ((tileId % 9) % 3);

        return (int) ((sqrModulo * 3) + tilesFromFirstTile);
    }

    private int calculateRow(int tileId) {
        // Calculate the square's row
        int sqrRow = (int) (this.sqr / 3);

        // Calculate the number of rows over from the first tile in the square
        int tileRow = (int) ((tileId % 9) / 3);

        return (int) ((sqrRow * 3) + tileRow);
    }

    public int calculateSqrPosition() {
        // Calculate the number of columns over from the first tile in the square
        return (int) ((this.id % 9) % 3);
    }

    @Override
    public String toString() {
        return "Tile [" + value + "] - Square: " + sqr + " / Row: " + row + " / Column: " + col;
    }
}