package Sudoku;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Random;

public class Tile {
    private final int id;
    public HashSet<Integer> possibleValues = new HashSet<Integer>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));
    private int value = 0;
    private boolean display = true;
    private final int square;
    private final int column;
    private final int row;

    public Tile(int tileId, int square, int column, int row) {
        id = tileId;
        this.square = square;
        this.column = column;
        this.row = row;
    }

    public int getId() {
        return id;
    }

    public int getValue() {
        return value;
    }

    public boolean getDisplay() {
        return display;
    }

    public int getSquare() {
        return square;
    }

    public int getColumn() {
        return column;
    }

    public int getRow() {
        return row;
    }

    public void setDisplay(boolean newDisplay) {
        display = newDisplay;
    }

    public int assignRandomPossibleValue() {
        Random random = new Random();
        Integer options[] = possibleValues.toArray(new Integer[possibleValues.size()]);

        final int randomValidValue = options[random.nextInt(options.length)];
        this.value = randomValidValue;

        return randomValidValue;
    }

    public void reset() {
        value = 0;
        possibleValues.clear();
        for (int i = 1; i <= 9; i++) {
            possibleValues.add(i);
        }
        display = true;
    }

    @Override
    public String toString() {
        return String.format("Tile [%d] Square: %d / Row: %d / Column: %d -- Value: %d", id, square, row, column,
                value);
    }
}
