package Sudoku;

import java.util.HashMap;

enum TileGroupType {
    row,
    column,
    square
}

class TileGroup {
    private final int id;
    private final TileGroupType type;
    private final Tile[] tiles = new Tile[9];
    private final HashMap<Integer, Boolean> values = new HashMap<Integer, Boolean>();
    
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

    public HashMap<Integer, Boolean> getValues() {
        return this.values;
    }

    public void addTile(Tile newTile, int position) {
        this.tiles[position] = newTile;
        this.values.put(newTile.getValue(), true);
    }

    public boolean isValid() {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < this.tiles.length; i++) {
            int tileValue = this.tiles[i].getValue();
            if (tileValue != 0) {
                if (map.containsKey(tileValue)) return false;
                map.put(tileValue, 1);
            }
        }
        return true;
    }
}
