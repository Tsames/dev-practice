package Sudoku;

public class Main {
    public static void main(String[] args) {
        Tile[] tiles = new Tile[9];
        for (int i=0; i < 9; i++) {
            Tile newTile = new Tile((byte) i, (byte) 1);
            tiles[i] = newTile;
        }
        TileGroup row = new TileGroup(tiles);
        boolean isValidRow = row.validate();
        System.out.println(isValidRow);
    }
}