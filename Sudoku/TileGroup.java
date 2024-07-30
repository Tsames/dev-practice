package Sudoku;

import java.util.HashMap;

public class TileGroup {
    private final Tile[] tiles;

    public TileGroup(Tile[] tiles) {
        this.tiles = tiles;
    }

    public boolean validate() {
        HashMap<Byte, Byte> map = new HashMap<>();
        for (int i = 0; i < this.tiles.length; i++) {
            byte tileValue = this.tiles[i].value;
            if (map.containsKey(tileValue)) {
                return false;
            } else {
                map.put(tileValue, (byte) 1);
            }
        }
        return true;
    }
}
