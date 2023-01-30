/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]] */

const rotate = (matrix) => {
    complete = {}
    queue = [[0,0,1]];

    while (queue.length > 0) {

        let cell = queue.shift();
        let cellRow =  cell[0];
        let cellColumn = cell[1];
        let cellValue = cell[2]

        let targetRow = cell[1];
        let targetColumn = matrix.length - (cell[0] + 1);
        let targetValue = matrix[targetRow][targetColumn]

        console.log(`Iterating at cell [${cellRow}, ${cellColumn}] which had value ${cellValue}.`);
        console.log(`We want to move the value to [${targetRow}, ${targetColumn}]. Where value ${targetValue} currently is.`);

        console.log(complete);
        complete[[[cellRow],[cellColumn]]] = 1;
        if (complete[[[targetRow],[targetColumn]]] !== 1) {
            console.log(`Adding new cell to queue. ${[targetRow, targetColumn, targetValue]}.`)
            queue.push([targetRow, targetColumn, targetValue]);
        }

        matrix[targetRow][targetColumn] = cellValue;
    }

    console.log(matrix);
    return matrix;
}

rotate([[1,2,3],[4,5,6],[7,8,9]]);