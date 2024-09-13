package Sudoku;
import java.util.ArrayList;
import java.util.Random;

public class Tile {
    private final int id;
    private final ArrayList<Integer> possibleValues = new ArrayList<Integer>();
    private int value;
    private boolean display;
    private final int square;
    private final int column;
    private final int row;

    public Tile(int tileId, int square, int column, int row) {
        id = tileId;
        this.square = square;
        this.column = column;
        this.row = row;
        value = 0;
        display = false;
        for (int i = 1; i <= 9; i++) {
            possibleValues.add(i);
        }
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

    public int getNumberOfPossibleValues() {
        return possibleValues.size();
    }

    public void removePossibleValue(int value) {
        for (int i = 0; i < possibleValues.size(); i++) {
            if (possibleValues.get(i) == value) {
                possibleValues.remove(i);
            }
        }
    }

    public int assignRandomPossibleValue() {
        Random random = new Random();

        final int randomValueIndex = possibleValues.get(random.nextInt(possibleValues.size()));
        value = possibleValues.get(randomValueIndex);
        return value;
    }

    public void reset() {
        value = 0;
        possibleValues.clear();
        for (int i = 1; i <= 9; i++) {
            possibleValues.add(i);
        }
        display = false;
    }

    @Override
    public String toString() {
        return "Tile [" + value + "] - Square: " + square + " / Row: " + row + " / Column: " + column;
    }
}
