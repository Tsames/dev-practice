package Sudoku;

import java.util.Arrays;
import java.util.HashSet;

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
        return tiles.clone();
    }

    public void addTile(Tile tile, int position) {
        tiles[position] = tile;
    }

    public Tile findTileWithFewestPossibleValues() {
        int fewestPossibleValues = 9;
        Tile tileWithFewestPossibleOptions = null;

        for (Tile tile : this.tiles) {
            if (tile.getValue() == 0 && tile.possibleValues.size() < fewestPossibleValues) {
                fewestPossibleValues = tile.possibleValues.size();
                tileWithFewestPossibleOptions = tile;
            }
        }

        return tileWithFewestPossibleOptions;
    }

    public void removeSharedPossibleValues(Tile targetTile) {
        HashSet<Integer> intersectionPossibleValues = new HashSet<Integer>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));

        for (Tile tile : tiles) {
            if (tile.getValue() == 0) {
                intersectionPossibleValues.retainAll(tile.possibleValues);
            }
        }

        if (intersectionPossibleValues.size() != targetTile.possibleValues.size()) {
            targetTile.possibleValues.removeAll(intersectionPossibleValues);
        }
    }

    public void removePossibleValueFromOtherTilesInGroup(int value, int positionInGroup) {
        for (int i = 0; i < 9; i++) {
            if (i != positionInGroup) {
                tiles[i].possibleValues.remove(value);
            }
        }
    }
}
