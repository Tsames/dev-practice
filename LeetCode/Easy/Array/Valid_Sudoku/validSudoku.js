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

    const check = {};

    //Iterate through the array of rows - i is row index
    for (let i=0; i < board.length; i++) {

        //Iterate through the rows - j is cell index
        for (let j=0; j < board[i].length; j++) {

            const value = board[i][j];
            const square = validSudokuHelper(i,j);

            // console.log(`Iterating at row ${i}, cell ${j} - Square ${square} - the value is ${board[i][j]}`);

            if (value  !== ".") {
                //Check Row Hash to see if duplicate exists
                if (check[[value,square,"x","x"]] > 0) {
                    // console.log(`Found a duplicate ${value} in square ${square}.`);
                    return false;
                } else if (check[[value,"x",i,"x"]] > 0) {
                    // console.log(`Found a duplicate ${value} in row ${i}.`);
                    return false;
                } else if (check[[value,"x","x",j]] > 0) {
                    // console.log(`Found a duplicate ${value} in column ${j}.`);
                    return false;
                }

                //Set Hash

                check[[value, square,"x","x"]] = 1;
                check[[value,"x",i,"x"]] = 1;
                check[[value,"x","x",j]] = 1;
                // console.log("Set new Hash Values.");
                // console.log(check); 
            }

        }
    };

    return true
}

function validSudokuHelper(i, j) {
    //If Cell is within the first three rows
    if (i <= 2) {

        if (j <= 3) {
            return 1;
        } else if ( 2 < j && j <=5) {
            return 2;
        } else {
            return 3;
        }

    //If Cell is within rows 4, 5, or 6
    } else if (2 < i && i <=5) {

        if (j <= 2) {
            return 4;
        } else if ( 2 < j && j <=5) {
            return 5;
        } else {
            return 6;
        }

    //If Cell is within rows 7, 8, or 9
    } else {

        if (j <= 2) {
            return 7;
        } else if ( 2 < j && j <=5) {
            return 8;
        } else {
            return 9;
        }

    }
}

module.exports = validSudoku