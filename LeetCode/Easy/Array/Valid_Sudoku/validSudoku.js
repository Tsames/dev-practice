/*  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

*/

//Messy Solution
function validSudoku(board) {

    //Iterate through the array of arrays
    board_loop:
    for (let row=0; row < board.length; row++) {
        let check = {};

        //Iterate through the rows
        for (let cell=0; cell < row.length; cell++) {

            console.log(`Iterating at cell is ${board[row][cell]} and the hash is ${check[cell]}`);

            //If the number at any given key in the hash is > 0 return false (they're are multiple of that number)
            if(Number(check[board[row][cell]]) > 0) {
                console.log("Returning false.")
                return false;
            //If its not empty record it in the hash    
            } else if(cell !== ".") {
                check[cell] = 1;
                console.log(check);
            }
        }
    };

    return true
}

console.log(validSudoku([["5","3",".",".","7",".","3",".",".","."]]));