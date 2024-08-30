/*
'''
Counting Liberties in Go

Go is an ancient game played on a board of 19x19 grid of lines. Black and white stones are placed at the intersections of these lines. A group of stones of one color is considered a _connected_ if every stone in the group is reachable from every other, traveling horizontally or vertically. For example, the following shows a is a single connected white group because we can traverse through all stones without jumps or moving diagonally. 

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W W + +
3 + + + W W +
4 + + + + + +
5 + + + + + +

A connected group of stones is captured when *all* adjacent points to the group are occupied by stones of the opposite color. Unoccupied intersections adjacent to a group of stones are called _liberties_. While playing the game, players must keep track of their groups and their liberty counts to look for strong moves to play.

The previous example group of white stones has 10 liberties. If the stone at (2, 3) is removed, it would be broken into two groups. The vertical group of three has 7 liberties, and the horizontal group of two has 6:

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W + + +
3 + + + W W +
4 + + + + + +
5 + + + + + +

Given a 19x19 board and an occupied position on the board, count the liberties of that connected group. Assume that the board is square and, at most 19x19, the size of a real Go board.
 

EXAMPLE(S)
countLiberties(
  [
    ['+', '+', '+'],
    ['+', 'W', '+'],
    ['+', '+', '+'],
  ],
  1, 1) == 4

countLiberties(
  [
    ['+', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ],
  1, 1) == 4

Similar to the last example, but the new stone isn't connected.
countLiberties(
  [
    ['B', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ],
  1, 1) == 4

countLiberties(
  [
    ['W', '+', 'W'],
    ['W', 'B', 'B'],
    ['W', 'W', 'B'],
  ],
  1, 1) == 1
 

FUNCTION SIGNATURE
function countLiberties(board, x, y) {
'''

const countLiberties(board, x, y) {
  have a visited matrix of size of board with all false, except at (x,y)
  determine whether we are checking for B vs W stones
  declare liberties count variable
  have queue of coordinates
  start with provided (x,y) coordinates, add to queue

  while queue.length {
    pop off the queue
    enqueue top, bottom, left, right (assuming they are the correct color and they are not blank)
    if blank, update liberties count (if !visited)

    update visited matrix:
      set coordinates of popped node to true in v matrix
      set coordinates of liberties to true in v matrix
    
  }
}
*/

const countLiberties = (board, x, y) => {
    if (board.length == 0) return 0;
  
    const cols = board[0].length;
    const rows = board.length;
  
    const visited = [];
    for (let i = 0; i < rows; i++) {
      visited.push(new Array(cols).fill(false));
    }
  
    const color = board[x][y];
    let libertiesCount = 0;
    const queue = [[x, y]];
  
    while (queue.length > 0) {
      const [x1, y1] = queue.shift();
  
      // update liberties count if adjacent space is on the board, is '+' and not visited yet
  
      // top
      if (y1 - 1 >= 0) {
        const top = board[x1][y1 - 1]
        const isVisited = visited[x1][y1 - 1]
        // blank check
        if (top === "+" && !isVisited) {
          libertiesCount++;
          visited[x1][y1 - 1] = true;
        }
  
        //enqueue
        if (top === color && !isVisited) {
          queue.push([x, y1 - 1]);
          visited[x1][y1 - 1] = true;
        }
      }
      // left
      if (x1 - 1 >= 0) {
        const left = board[x1 - 1][y1];
        const isVisited = visited[x1 - 1][y1];
        // blank check
        if (left === "+" && !isVisited) {
          libertiesCount++;
          visited[x1 - 1][y1] = true;
        }
  
        //enqueue
        if (left === color && !isVisited) {
          queue.push([x1 - 1, y1]);
          visited[x1 - 1][y1] = true;
        }
      }
      // right
      if (x1 + 1 < cols) {
        const right = board[x1 + 1][y1];
        const isVisited = visited[x1 + 1][y1];
        // blank check
        if (right === "+" && !isVisited) {
          libertiesCount++;
          visited[x1 + 1][y1] = true;
        }
  
        //enqueue
        if (right === color && !isVisited) {
          queue.push([x1 + 1, y1]);
          visited[x1 + 1][y1] = true;
        }
      };
      // bottom
      if (y1 + 1 < rows) {
        const bottom = board[x1][y1 + 1];
        const isVisited = visited[x1][y1 + 1];
        // blank check
        if (bottom === "+" && !isVisited) {
          libertiesCount++;
          visited[x1][y1 + 1] = true;
        }
  
        //enqueue
        if (bottom === color && !isVisited) {
          queue.push([x1, y1 + 1]);
          visited[x1][y1 + 1] = true;
        }
      };
    }
  
    return libertiesCount;
  }
  
  console.log(countLiberties(
    [
      ['+', '+', '+'],
      ['+', 'W', '+'],
      ['+', '+', '+'],
    ],
    1, 1));
  
  console.log(countLiberties(
    [
      ['B', '+', '+'],
      ['+', 'B', 'B'],
      ['+', '+', 'B'],
    ],
    1, 1))
  
  console.log(countLiberties(
    [
      ['W', '+', 'W'],
      ['W', 'B', 'B'],
      ['W', 'W', 'B'],
    ],
    1, 1))
  
  console.log(countLiberties([['W']], 4, 7))

// Cleaner Solution

function countLibertiesClean(board, row, col) {
    const color = board[row][col];
    const stack = [[row, col]];
    let liberties = 0;
    const size = board.length; // assuming square
    const checked = new Set();
  
    function checkLocation(r, c) {
      const key = `${r},${c}`;
      if (checked.has(key)) return;
      checked.add(key);
  
      if (r < 0 || r >= size) return;
      if (c < 0 || c >= size) return;
      if (board[r][c] === color) stack.push([r, c]);
      if (board[r][c] === '+') liberties++;
    }
  
    while (stack.length > 0) {
      const [x, y] = stack.pop();
  
      checkLocation(x + 1, y);
      checkLocation(x - 1, y);
      checkLocation(x, y + 1);
      checkLocation(x, y - 1);
    }
  
    return liberties;
  }