// knightMoves()
const knightMoves = function (startLocation, endLocation) {
  // validatePosition()
  const validatePosition = function (currentPositionArray) {
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
      return false;
    }
    return true;
  };

  // possibleMoves()
  const possibleMoves = function (currentPositionArray) {
    validatePosition(currentPositionArray);
    const possibleMoves = [];
    const moveStructure = [
      [1, 2],
      [2, 1],
      [1, -2],
      [2, -1],
      [-1, 2],
      [-2, 1],
      [-1, -2],
      [-2, -1],
    ];
    for (let i = 0; i < moveStructure.length; i++) {
      const newSquare = [];
      newSquare.push(moveStructure[i][0] + currentPositionArray[0]);
      newSquare.push(moveStructure[i][1] + currentPositionArray[1]);
      if (validatePosition(newSquare)) {
        possibleMoves.push(newSquare);
      }
    }
    return possibleMoves;
  };

  // chessSquare as object factory
  const chessSquare = function (currentPosition) {
    const allowedMoves = possibleMoves(currentPosition);
    return { currentPosition, allowedMoves };
  };

  // board = 2D array 8 x 8
  const makeBoard = function () {
    const board = [];
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i][j] = chessSquare([i, j]);
      }
    }
    return board;
  };

  // breadthFirstSearch()
  const breadthFirstSearch = function () {
    const gameBoard = makeBoard();

    const moveTrackingObjectFactory = function (position) {
      const square = gameBoard[position[0]][position[1]];
      const location = square.currentPosition;
      const allowedMoves = square.allowedMoves;
      const moveHistory = [];
      moveHistory.push(position);
      return { location, allowedMoves, moveHistory };
    };

    const startingSquare = moveTrackingObjectFactory(startLocation);
    const queue = [];
    const alreadyVisited = [];
    queue.push(startingSquare);
    while (queue.length > 0) {
      const thisLocation = queue.shift();
      alreadyVisited.push(thisLocation.location);
      const movesFromHere = thisLocation.allowedMoves;
      for (let i = 0; i < movesFromHere.length; i++) {
        if (!alreadyVisited.includes(movesFromHere[i])) {
          alreadyVisited.push(movesFromHere[i]);
          const newLocation = moveTrackingObjectFactory(movesFromHere[i]);
          const newMoveHistory = thisLocation.moveHistory.concat(
            newLocation.moveHistory
          );
          newLocation.moveHistory = newMoveHistory;
          queue.push(newLocation);
          if (
            newLocation.location[0] === endLocation[0] &&
            newLocation.location[1] === endLocation[1]
          ) {
            return newLocation.moveHistory;
          }
        }
      }
    }
  };

  // shortestPath
  const shortestPath = breadthFirstSearch();

  // console.log(shortestPath);
  return shortestPath;
};

console.log(knightMoves([1, 1], [2, 7]));
