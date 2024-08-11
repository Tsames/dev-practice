package Sudoku;

import java.util.ArrayList;
import java.util.Arrays;
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

    public HashMap<Integer, Integer> getTileValues(int targetIndex) {
        HashMap<Integer, Integer> values = new HashMap<Integer, Integer>();

        for (Tile tile: this.tiles) {
            if (tile != null) {
                values.put(tile.value.getNumber(), 1);
            } 
        }

        return values;
    }

    public void addTile(Tile newTile, int position) {
        tiles[position] = newTile;
    }

    public boolean isValid() {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < this.tiles.length; i++) {
            int tileValue = this.tiles[i].value.getNumber();
            if (tileValue != 0) {
                if (map.containsKey(tileValue)) return false;
                map.put(tileValue, 1);
            }
        }
        return true;
    }
}
