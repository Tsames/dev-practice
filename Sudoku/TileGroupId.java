package Sudoku;

enum TileGroupType {
    row,
    column,
    square
}

class TileGroupId {
    private final TileGroupType type;
    private final int number;

    TileGroupId(TileGroupType type, int number) {
        this.type = type;
        this.number = number;
    }

    public TileGroupType getType() {
        return this.type;
    }

    public int getNumber() {
        return this.number;
    }
}