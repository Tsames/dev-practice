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

    public boolean isValid() {
        HashSet<Integer> values = new HashSet<Integer>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));
        for (Tile tile : tiles) {
            if (!values.remove(tile.getValue())) {
                return false;
            }
        }

        return values.size() == 0;
    }

    public Tile findTileWithFewestPossibleValues() {
        int fewestPossibleValues = 10;
        Tile tileWithFewestPossibleOptions = null;

        for (Tile tile : this.tiles) {
            if (tile.getValue() == 0 && tile.possibleValues.size() < fewestPossibleValues) {
                fewestPossibleValues = tile.possibleValues.size();
                tileWithFewestPossibleOptions = tile;
            }
        }

        System.out.println(String.format("Selecting a value for Tile %d in row %d",
                tileWithFewestPossibleOptions.getColumn(), tileWithFewestPossibleOptions.getRow()));

        return tileWithFewestPossibleOptions;
    }

    public void removeSharedPossibleValues(Tile targetTile) {
        HashSet<Integer> sharedPossibleValues = new HashSet<Integer>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));

        for (Tile tile : tiles) {
            if (tile.getValue() == 0) {
                sharedPossibleValues.retainAll(tile.possibleValues);
            }
        }

        System.err.println("Removing the following shared values from the possible options");
        System.out.println(sharedPossibleValues);
        if (sharedPossibleValues.size() != targetTile.possibleValues.size()) {
            targetTile.possibleValues.removeAll(sharedPossibleValues);
        }
    }

    public void addPossibleValueToGroup(int value) {
        for (int i = 0; i < 9; i++) {
            if (tiles[i].getValue() != value) {
                tiles[i].possibleValues.add(value);
            }
        }
    }

    public void removePossibleValueFromGroup(int value) {
        for (int i = 0; i < 9; i++) {
            if (tiles[i].getValue() != value) {
                tiles[i].possibleValues.remove(value);
            }
        }
    }
}
