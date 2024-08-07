package Sudoku;

public class Tile {
    private final int id;
    public final TileValue value;
    private final int square;
    private final int column;
    private final int row;

    public Tile(int tileId, TileValue tileValue) {
        this.id = tileId;
        this.value = tileValue;
        this.square = calculateSquare(tileId);
        this.column = calculateColumn(tileId);
        this.row = calculateRow(tileId);
    }

    public int getId() {
        return this.id;
    }

    public int getSquare() {
        return this.square;
    }

    public int getColumn() {
        return this.column;
    }

    public int getRow() {
        return this.row;
    }

    public int getPositionInSquare() {
        return this.id % 9;
    }

    private int calculateSquare(int tileId) {
        return tileId / 9;
    }

    private int calculateColumn(int tileId) {
        // Calculate the square's column
        int sqrModulo = this.square % 3;

        // Calculate the number of columns over from the first tile in the square
        int tilesFromFirstTile = (tileId % 9) % 3;

        return (sqrModulo * 3) + tilesFromFirstTile;
    }

    private int calculateRow(int tileId) {
        // Calculate the square's row
        int sqrRow = this.square / 3;

        // Calculate the number of rows over from the first tile in the square
        int tileRow = (tileId % 9) / 3;

        return (sqrRow * 3) + tileRow;
    }

    @Override
    public String toString() {
        return "Tile [" + value + "] - Square: " + square + " / Row: " + row + " / Column: " + column;
    }
}
