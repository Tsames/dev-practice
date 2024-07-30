package Sudoku;

import java.util.HashMap;

enum TileGroupType {
    row,
    column,
    square
}

class TileGroupId {
    public final TileGroupType type;
    public final int number;

    TileGroupId(TileGroupType type, int number) {
        this.type = type;
        this.number = number;
    }
}

class TileGroup {
    public final TileGroupId id;
    public final Tile[] tiles = new Tile[9];

    public TileGroup(TileGroupId id) {
        this.id = id;
    }

    public void addTile(Tile newTile, int position) {
        tiles[position] = newTile;
    }

    public boolean validate() {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < this.tiles.length; i++) {
            int tileValue = this.tiles[i].value;
            if (map.containsKey(tileValue)) {
                return false;
            } else {
                map.put(tileValue, 1);
            }
        }
        return true;
    }
}
