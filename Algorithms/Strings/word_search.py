"""
Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells,
where adjacent cells are horizontally or vertically neighboring.
The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 
Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
"""


def word_search(board: list[list[str]], word: str) -> bool:

    def search_word(row: int, col: int, index: int) -> bool:
        # The Cell that we are checking must be in the bounds of the board
        if row >= 0 and row < len(board) and col >= 0 and col < len(board[0]):
            # If the value at that cell is equal to the correct letter
            if board[row][col] == word[index]:
                # If the index is at the final letter of the word, we've found the word
                # So return True
                if index == len(word) - 1:
                    return True

                # Else change the value of the current cell to prevent it from being counted agian
                temp = board[row][col]
                board[row][col] = None

                # Recursive calls to adjacent cells
                left = search_word(row, col - 1, index + 1)
                right = search_word(row, col + 1, index + 1)
                top = search_word(row - 1, col, index + 1)
                bottom = search_word(row + 1, col, index + 1)

                # If any one of them return True, then we've found the word, so return True
                if left or right or top or bottom:
                    return True

                # Else we haven't found the rest of the word, so change back the value
                board[row][col] = temp

        return False

    # Search the matrix sequentially for the first letter
    for rowIndex in range(0, len(board)):
        for colIndex in range(0, len(board[0])):
            if board[rowIndex][colIndex] == word[0]:
                # Start our recursive function
                foundFullWord = search_word(rowIndex, colIndex, 0)

                if foundFullWord:
                    return True

    return False


print(
    word_search(
        [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"
    )
)  # Expected True

print(
    word_search(
        [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"
    )
)  # Expected True
