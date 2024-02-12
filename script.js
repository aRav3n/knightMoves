// board = 2D array 8 x 8
const makeBoard = function () {
  const column = Array(8);
  for (let i = 0; i < column.length; i++) {
    column[i] = 0;
  }
  const board = Array(8);
  for (let i = 0; i < board.length; i++) {
    board[i] = column;
  }
  return board;
};

const gameBoard = makeBoard();

// possibleMoves()

// shortestPath() function to find shortest path between current location and desired location

// knightMoves()
