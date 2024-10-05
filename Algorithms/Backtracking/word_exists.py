'''
Given a 2D board of characters and a word, find if the word exists in the grid.

The word is considered to exist in the grid by starting anywhere on the grid and moving adjacent horizontally or vertically.
Each character can only be used one time.
 

EXAMPLE(S)
On this grid:
[['A', 'B', 'C'],
 ['D', 'E', 'F'],
 ['G', 'H', 'I']]

The word "ABEHI" exists.
The word "AE" does not exist.
The word "AC" does not exist.
 

FUNCTION SIGNATURE
func wordExists(grid: [[String]], word: String) -> Bool
def wordExists(board: List[List[str]], word: str) -> bool:
'''

def word_exists(board: list[list[str]], word: str) -> bool:

    def assemble_word(sequence, row, col):
        nonlocal word

        if not board[row][col] == word[len(sequence)] or board[row][col] == "*":
            return False
        
        current_letter = board[row][col]
        new_sequence = sequence + current_letter

        if new_sequence == word: return True
        board[row][col] = "*"

        top, bottom, left, right = False, False, False, False
        # Top
        if row - 1 > 0 and row - 1 < len(board):
            top = assemble_word(new_sequence, row - 1, col)
        
        # Bottom
        if row + 1 > 0 and row + 1 < len(board):
            bottom = assemble_word(new_sequence, row + 1, col)
        
        # Left
        if col - 1 > 0 and col - 1 < len(board[0]):
            left = assemble_word(new_sequence, row, col - 1)

        # Right
        if col + 1 > 0 and col + 1 < len(board[0]):
            right = assemble_word(new_sequence, row, col + 1)

        board[row][col] = current_letter
        
        return top or bottom or left or right
        

    
    for rowIndex in range(len(board)):
        for colIndex in range(len(board[0])):
            if assemble_word("",rowIndex, colIndex): return True
    
    return False


print(word_exists([['A', 'B', 'C'],
 ['D', 'E', 'F'],
 ['G', 'H', 'I']],"ABEHI"))

print(word_exists([['A', 'B', 'C'],
 ['D', 'E', 'F'],
 ['G', 'H', 'I']],"AE"))

print(word_exists([['A', 'B', 'C'],
 ['D', 'E', 'F'],
 ['G', 'H', 'I']],"AC"))

print(word_exists([['A', 'B', 'A'],
 ['D', 'E', 'F'],
 ['G', 'H', 'I']],"ABA"))
