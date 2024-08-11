package Sudoku;

import java.lang.Math;


public class Tile {
    private final int id;
    private int value;
    private boolean display;
    private final int square;
    private final int column;
    private final int row;

    public Tile(int tileId, int value, boolean display, int square, int column, int row) {
        this.id = tileId;
        this.value = value;
        this.display = display;
        this.square = square;
        this.column = column;
        this.row = row;
    }

    public int getId() {
        return this.id;
    }

    public int getValue() {
        return this.value;
    }

    public void setValue(int newValue) {
        this.value = newValue < 1 || newValue > 9 ? Math.abs(newValue) % 9: newValue;
    }

    public boolean getDisplay() {
        return this.display;
    }

    public void setDisplay(boolean newDisplay) {
        this.display = newDisplay;
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

    @Override
    public String toString() {
        return "Tile [" + value + "] - Square: " + square + " / Row: " + row + " / Column: " + column;
    }
}
