package Sudoku;

enum TileGroupType {
    row,
    column,
    square
}

class TileGroup {
    private final int id;
    private final TileGroupType type;
    private final Tile[] tiles = new Tile[9];
    
    public TileGroup(int id, TileGroupType type) {
        this.id = id;
        this.type = type;
    }

    public int getId() {
        return this.id;
    }

    public TileGroupType getType() {
        return this.type;
    }

    public Tile[] getTiles() {
        return this.tiles;
    }

    public void removePossibleValueFromOtherTilesInGroup(int value, int positionInGroup) {
        for (int i = 0; i < 9; i++) {
            if (i != positionInGroup) {
                tiles[i].removePossibleValue(value);
            }
        }
    }
}
