from Tile import Tile
from TileGroup import TileGroup, TileGroupType


class Board:
    def __init__(self):
        self._rows = []
        self._columns = []
        self._squares = []
        self._tiles = []

        self._create_board()

    def _calculate_row(self, tile_id: int) -> int:
        return tile_id / 9

    def _calculate_column(self, tile_id: int) -> int:
        return tile_id % 9

    def _calculate_square(self, tile_id: int) -> int:
        horizontal_position = (tile_id % 9) / 3
        vertical_position = tile_id / 9
        return horizontal_position + vertical_position

    def _calculate_position_in_square(self, tile_id: int) -> int:
        horizontal_position = (tile_id % 9) % 3
        vertical_position = (tile_id / 9) % 3
        return horizontal_position + (vertical_position * 3)

    def _create_board(self) -> None:
        for i in range(10):
            self._rows.append(TileGroup(i, TileGroupType.ROW))
            self._columns.append(TileGroup(i, TileGroupType.COL))
            self._squares.append(TileGroup(i, TileGroupType.SQR))

        for i in range(81):
            target_row = self._calculate_row(i)
            target_column = self._calculate_column(i)
            target_square = self._calculate_square(i)

            new_tile = Tile(i, target_row, target_column, target_square)

            self._rows[target_column].append(new_tile)
            self._columns[target_row].append(new_tile)
            self._squares[self._calculate_square(i)].append(new_tile)
            self._tiles.append(new_tile)

    def is_valid(self) -> bool:
        for i in range(10):
            if (
                not self._rows[i].is_valid()
                or not self._columns[i].is_valid()
                or not self._squares[i].is_valid()
            ):
                return False
        return True
    
    def __str__(self):
        board = ""
        for i, row in enumerate(self._tiles):
            for j, tile in enumerate(row.tiles):
                board += f"  {tile.value}" if tile.display else f"  *"
                if (j == 2 or j == 5):
                    board += "  |"
                elif (j == 8):
                    board += "\n"
            if i == 2 or i == 5:
                board += "-----------|-----------|-----------\n"
        
        return board
