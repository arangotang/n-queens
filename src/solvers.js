/* eslint-disable indent */
/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // debugger;
  // create empty array with valid combinations
  let validCombinations = [];
  let helperBoard = new Board({n: n});
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(j === i ? 1 : 0);
    }
    helperBoard.set(i, temp);
}
  // create helper function (findValidSolutions)
  const findValidSolutions = function(currentBoard = []) {
    if (currentBoard.length === n) {
      let rookBoard = new Board(currentBoard);
      if (!rookBoard.hasAnyRooksConflicts()) {
        validCombinations.push(currentBoard);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      findValidSolutions(currentBoard.concat([helperBoard.get(i)]));
    }
  };

  findValidSolutions();
  let solutionCount = validCombinations.length;


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // debugger;
  // create empty array with valid combinations
  let validCombinations = [];
  let helperBoard = new Board({n: n});
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(j === i ? 1 : 0);
    }
    helperBoard.set(i, temp);
  }
  // create helper function (findValidSolutions)
  const findValidSolutions = function(currentBoard = []) {
    if (currentBoard.length === n) {
      let queenBoard = new Board(currentBoard);
      if (!queenBoard.hasAnyQueensConflicts()) {
        validCombinations.push(currentBoard);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      findValidSolutions(currentBoard.concat([helperBoard.get(i)]));
    }
  };

  findValidSolutions();
  let solutionCount = validCombinations.length;


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
