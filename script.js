/*
// board = 2D array 8 x 8
const makeBoard = function () {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = chessSquare(i, j);
    }
  }
  console.log(board);
  return board;
};
*/

// possibleMoves()
const possibleMoves = function (currentPositionArray) {
  let validCurrentPosition = true;
  if (
    currentPositionArray[0] < 0 ||
    currentPositionArray[0] > 7 ||
    currentPositionArray[1] < 0 ||
    currentPositionArray[1] > 7
  ) {
    validCurrentPosition = false;
  }
  if (!validCurrentPosition) {
    console.log(`starting location ${currentPositionArray} is not valid`);
    return false;
  }
};

// chessSquare as object factory
const chessSquare = function (positionAsArray) {
  const possibleMoves = [];
  return { positionAsArray, possibleMoves };
};

possibleMoves([1, 2]);

// shortestPath() function to find shortest path between current location and desired location

// knightMoves()
