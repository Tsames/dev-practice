package Sudoku;

import java.util.Random;
import java.util.stream.IntStream;
import java.util.ArrayList;
import java.util.Arrays;

public class Board {
    private TileGroup[] rows = IntStream.range(0, 9)
            .mapToObj(n -> new TileGroup(new TileGroupId(TileGroupType.row, n)))
            .toArray(TileGroup[]::new);
    private TileGroup[] columns = IntStream.range(0, 9)
            .mapToObj(n -> new TileGroup(new TileGroupId(TileGroupType.column, n)))
            .toArray(TileGroup[]::new);
    private TileGroup[] squares = IntStream.range(0, 9)
            .mapToObj(n -> new TileGroup(new TileGroupId(TileGroupType.square, n)))
            .toArray(TileGroup[]::new);
    private Tile[] tiles = IntStream.range(0, 81)
            .mapToObj(n -> new Tile(n, new TileValue(0, false)))
            .toArray(Tile[]::new);;

    public Board() {
        generateRandomBoard();
    };

    public void generateRandomBoard() {
        Random random = new Random();

        // Loop through each square of the board
        for (int i = 0; i < 9; i++) {
            ArrayList<Integer> availableValues = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));

            // Loop through each tile of the square
            for (int j = 0; j < 9; j++) {
                int randomIndex = random.nextInt(9 - j);
                int tileId = (i * 9) + j;

                Tile newTile = new Tile(tileId, new TileValue(availableValues.get(randomIndex), true));

                tiles[i] = newTile;
                rows[newTile.getRow()].addTile(newTile, newTile.getColumn());
                columns[newTile.getColumn()].addTile(newTile, newTile.getRow());
                squares[newTile.getSquare()].addTile(newTile, newTile.getPositionInSquare());

                availableValues.remove(randomIndex);
            }
        }
    }

    public boolean isValid() {
        for (int i = 0; i < 9; i++) {
            if (!this.rows[i].isValid() || !this.columns[i].isValid() || !this.squares[i].isValid()) {
                return false;
            }
            ;
        }
        return true;
    }

    public void printBoard() {
        String board = "\n";
        for (int i = 0; i < 9; i++) {
            Tile[] tiles = this.rows[i].getTiles();
            for (int j = 0; j < 9; j++) {
                board += tiles[j].value.getDisplay() ? String.format("  %d", tiles[j].value.getNumber()) : "  *";
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