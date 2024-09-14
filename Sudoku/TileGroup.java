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
        return id;
    }

    public TileGroupType getType() {
        return type;
    }

    public Tile[] getTiles() {
        return tiles;
    }

    public void addTile(Tile tile, int positionInGroup) {
        tiles[positionInGroup] = tile;
    }

    public void removePossibleValueFromOtherTilesInGroup(int value, int positionInGroup) {
        for (int i = 0; i < 9; i++) {
            if (i != positionInGroup) {
                tiles[i].removePossibleValue(value);
            }
        }
    }
}
