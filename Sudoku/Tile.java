package Sudoku;

public class Tile {
    public final byte id;
    public byte value;
    public final byte sqr;
    public final byte col;
    public final byte row;

    public Tile(byte tileId, byte value) {
        this.id = tileId;
        this.value = value;
        this.sqr = calculateSqr(tileId);
        this.col = calculateCol(tileId);
        this.row = calculateRow(tileId);
    }

    public Tile(byte tileId) {
        this(tileId, (byte) 0);
    }

    private byte calculateSqr(byte tileId) {
        return (byte) (tileId / 9);
    }

    private byte calculateCol(byte tileId) {
        // Calculate the square's column
        byte sqrModulo = (byte) (this.sqr % 3);

        // Calculate the number of columns over from the first tile in the square
        byte tilesFromFirstTile = (byte) ((tileId % 9) % 3);

        return (byte) ((sqrModulo * 3) + tilesFromFirstTile);
    }

    private byte calculateRow(byte tileId) {
        // Calculate the square's row
        byte sqrRow = (byte) (this.sqr / 3);

        // Calculate the number of rows over from the first tile in the square
        byte tileRow = (byte) ((tileId % 9) / 3);

        return (byte) ((sqrRow * 3) + tileRow);
    }

    @Override
    public String toString() {
        return "Tile [" + value + "] - Square: " + sqr + " / Row: " + row + " / Column: " + col;
    }
}