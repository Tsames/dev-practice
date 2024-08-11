package Sudoku;

import java.util.Random;
import java.util.stream.IntStream;
import java.util.ArrayList;
import java.util.HashMap;

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
        generateRandomBoard();
    };

    // Calculate a given Tile's Square based on its Id
    private int calculateSquare(int tileId) {
        return tileId / 9;
    }

    // Calculate a give Tile's postion in its Square
    private int calculatePositionInSquare(int tileId) {
        return (tileId / 9) % 9;
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

    public void generateRandomBoard() {
        Random random = new Random();

        // Create new Tiles
        for (int i = 0; i < 81; i++) {
            System.out.println(String.format("\nCreating tile %d", i));

            final int targetSquare = this.calculateSquare(i);
            final int targetColumn = this.calculateColumn(i);
            final int targetRow = this.calculateRow(i);

            System.out.println(String.format("\tSquare: %d", targetSquare));
            System.out.println(String.format("\tColumn: %d", targetColumn));
            System.out.println(String.format("\tRow: %d", targetRow));

            final HashMap<Integer, Boolean> valuesInTargetSquare = this.squares[targetSquare].getValues();
            final HashMap<Integer, Boolean> valuesInTargetColumn = this.columns[targetColumn].getValues();
            final HashMap<Integer, Boolean> valuesInTargetRow = this.rows[targetRow].getValues();


            ArrayList<Integer> validValuesForThisIndex = new ArrayList<Integer>();
            System.out.println(String.format("\n\tDetermining available values..."));
            for (int j=1; j <= 9; j++) {
                int count = 0;
                if (valuesInTargetSquare.containsKey(j)) {
                    count += 1;
                    System.out.println(String.format("\t\t %d already exists in the Square.", j));
                }
                if (valuesInTargetColumn.containsKey(j)) {
                    count += 1;
                    System.out.println(String.format("\t\t %d already exists in the Column.", j));
                }
                if (valuesInTargetRow.containsKey(j)) {
                    count += 1;
                    System.out.println(String.format("\t\t %d already exists in the Row.", j));
                }

                if (count == 0) {
                    System.out.println(String.format("\t\t %d is available.", j));
                    validValuesForThisIndex.add(j);
                }
            }

            int tileValue = validValuesForThisIndex.size() == 1 ? validValuesForThisIndex.get(0) : validValuesForThisIndex.get(random.nextInt(0, validValuesForThisIndex.size() - 1));
            System.out.println(String.format("\tSelected value %d for new Tile.", tileValue));
            final Tile newTile = new Tile(i, tileValue, true, targetSquare, targetColumn, targetRow);

            this.squares[targetSquare].addTile(newTile, calculatePositionInSquare(tileValue));
            this.columns[targetColumn].addTile(newTile, targetRow);
            this.rows[targetRow].addTile(newTile, targetColumn);
            this.tiles[i] = newTile;
        }
    
    }

    public boolean isValid() {
        for (int i = 0; i < 9; i++) {
            if (!this.rows[i].isValid() || !this.columns[i].isValid() || !this.squares[i].isValid()) return false;
        }
        return true;
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