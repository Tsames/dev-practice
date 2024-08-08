package Sudoku;

import java.util.HashMap;

class TileGroup {
    public final TileGroupId id;
    private final Tile[] tiles = new Tile[9];
    
    public TileGroup(TileGroupId id) {
        this.id = id;
    }

    public Tile[] getTiles() {
        return this.tiles;
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
