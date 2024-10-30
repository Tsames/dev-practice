import random


class Tile:
    def __init__(self, id: int, row: int, column: int, square: int):
        self._id = id
        self._row = row
        self._column = column
        self._square = square
        self.possible_values = set([1, 2, 3, 4, 5, 6, 7, 8, 9])
        self.value = 0
        self.display = False

    def pick_value(self):
        if not self.possible_values:
            print(f"No possible values when trying to pick new value for {self}")
            return None

        if self.value != 0:
            print(f"Value is already set when trying to pick new value for {self}")
            return None

        random_value = random.choice(list(self.possible_values))
        self.possible_values.remove(random_value)
        self.value = random_value
        print(f"Selected {random_value} for {self}")
        return random_value

    def __str__(self):
        return f"Tile {self._id} [{self.value}] @ Row: {self._row} / Col: {self._column} / Sqr: {self._square}"
