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
const chessSquare = function (currentPositionArray) {
  const movesFromPosition = possibleMoves(currentPositionArray);
  return { currentPositionArray, movesFromPosition };
};

// shortestPath() function to find shortest path between current location and desired location

// knightMoves()
