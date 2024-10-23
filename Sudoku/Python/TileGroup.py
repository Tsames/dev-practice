from Tile import Tile
from enum import Enum


class TileGroupType(Enum):
    ROW = "Row"
    COL = "Column"
    SQR = "Square"


class TileGroup:
    def __init__(self, id: int, type: TileGroupType):
        self._id = id
        self._type = type
        self.tiles = []

    def is_valid(self):
        values = set([1, 2, 3, 4, 5, 6, 7, 8, 9])

        for tile in self.tiles:
            if tile.value in values:
                values.remove(tile.value)
            else:
                return False

        return True

    def add_possible_value_to_group(self, val):
        for tile in self.tiles:
            tile.possible_values.add(val)

    def remove_possible_value_from_group(self, val):
        for tile in self.tiles:
            tile.possible_values.remove(val)

    def __str__(self):
        res = ""
        for tile in self.tiles:
            res += str(tile.value) + ","
        return f"{self._type.value} {self._id} - [{res}]"
    
new_tile_group = TileGroup(1, TileGroupType.ROW)
for i in range(1, 10):
    new_tile = Tile(i,1,0,0)
    new_tile.value = i
    new_tile_group.tiles.append(new_tile)

print(new_tile_group)
