/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]] */

const rotate = (matrix) => {

    //Create Hash Map to keep track of those cells that have been swapped
    completed = {}

    //Iterate through the nested array representing rows
    for (let i=0; i < matrix.length; i++) {

        //Iterate through the elements of each array representing columns
        for (let j=0; j < matrix[0].length; j++) {

            //Execute only if the cell has not been acted on before
            if (completed[[[i],[j]]] !== 1) {
                rotateHelper(i, j, matrix[i][j], matrix, completed);
            }
        }
    }

    console.log(matrix);
    return matrix;
}

const rotateHelper = (row, column, value, matrix, completed) => {

    queue = [[row, column, value]];

    while (queue.length > 0) {

        let cell = queue.shift();

        //Extract Data
        let cellRow =  cell[0];
        let cellColumn = cell[1];
        let cellValue = cell[2]

        //Get Target Data
        let targetRow = cell[1];
        let targetColumn = matrix.length - (cell[0] + 1);
        let targetValue = matrix[targetRow][targetColumn]

        //Communicate Swap
        console.log(`Iterating at cell [${cellRow}, ${cellColumn}] which had value ${cellValue}.`);
        console.log(`We want to move the value to [${targetRow}, ${targetColumn}]. Where value ${targetValue} currently is.`);

        //Track Swap
        console.log('We have now visited the following cells');
        completed[[[cellRow],[cellColumn]]] = 1;
        console.log(completed);

        //Make Swap
        matrix[targetRow][targetColumn] = cellValue;

        //Add to queue
        if (completed[[targetRow, targetColumn]] !== 1) {
            queue.push([targetRow, targetColumn, targetValue]);
        }

    }
}

rotate([[1,2,3],[4,5,6],[7,8,9]]);

module.exports = rotate