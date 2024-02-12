// board = 2D array 8 x 8
const makeBoard = function () {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = true;
    }
  }
  return board;
};

// possibleMoves()
const possibleMoves = function (i, j) {
  const gameBoard = makeBoard();
  if (gameBoard[i][j] === undefined) {
    console.log(`starting location [${i}][${j}] is not valid`);
  }
};

possibleMoves(1, 1);

// shortestPath() function to find shortest path between current location and desired location

// knightMoves()
