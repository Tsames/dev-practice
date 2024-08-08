package Sudoku;

class TileValue {
    private int number;
    private boolean display;

    TileValue(int number, boolean display) {
        if (number < 1 || number > 9) this.number = 0;
        this.number = number;
        this.display = display;
    }

    TileValue() {
        this.number = 0;
        this.display = false;
    }

    public int getNumber() {
        return this.number;
    }
    
    public boolean getDisplay() {
        return this.display;
    }

    public void setDisplay(boolean displayValue) {
        this.display = displayValue;
    }
}