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
  if (n === 0) {
    return 1;
  }
  let solutionCount = 0;
  let helperBoard = new Board({n: n});
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(j === i ? 1 : 0);
    }
    helperBoard.set(i, temp);
  }
  let currentBoard = new Board({n: n});
  const findValidSolutions = function(currentBoard, l) {
    if (l === n) {
      if (!currentBoard.hasAnyRooksConflicts()) {
        if (solutionCount === 0) {
          solutionCount = currentBoard.rows();
        }
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      let potentialRow = helperBoard.get(i);
      let potentialRowAlreadyInCurrentBoard = false;
      for (let j = 0; j < l; j++) {
        if (JSON.stringify(potentialRow) === JSON.stringify(currentBoard.get(j))) {
          potentialRowAlreadyInCurrentBoard = true;
        }
      }
      if (!potentialRowAlreadyInCurrentBoard) {
        findValidSolutions(currentBoard.set(l, potentialRow), l + 1);
      }
    }
  };

  findValidSolutions(currentBoard, 0);
  // let solutionCount = validCombinations.length;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionCount));
  return solutionCount;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  let solutionCount = 0;
  let helperBoard = new Board({n: n});
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(j === i ? 1 : 0);
    }
    helperBoard.set(i, temp);
  }
  let currentBoard = new Board({n: n});
  const findValidSolutions = function(currentBoard, l) {
    if (l === n) {
      if (!currentBoard.hasAnyRooksConflicts()) {
        solutionCount++;
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      let potentialRow = helperBoard.get(i);
      let potentialRowAlreadyInCurrentBoard = false;
      for (let j = 0; j < l; j++) {
        if (JSON.stringify(potentialRow) === JSON.stringify(currentBoard.get(j))) {
          potentialRowAlreadyInCurrentBoard = true;
        }
      }
      if (!potentialRowAlreadyInCurrentBoard) {
        findValidSolutions(currentBoard.set(l, potentialRow), l + 1);
      }
    }
  };

  findValidSolutions(currentBoard, 0);
  // let solutionCount = validCombinations.length;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0) {
    return [];
  }
  let defaultBoard = new Board({n: n});
  let solutionCount = [];
  let helperBoard = new Board({n: n});
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(j === i ? 1 : 0);
    }
    helperBoard.set(i, temp);
  }
  let currentBoard = new Board({n: n});
  const findValidSolutions = function(currentBoard, l) {
    if (l === n) {
      if (!currentBoard.hasAnyQueensConflicts()) {
        if (solutionCount.length === 0) {
          solutionCount = currentBoard.rows();
        }
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      let potentialRow = helperBoard.get(i);
      let potentialRowAlreadyInCurrentBoard = false;
      for (let j = 0; j < l; j++) {
        if (JSON.stringify(potentialRow) === JSON.stringify(currentBoard.get(j))) {
          potentialRowAlreadyInCurrentBoard = true;
        }
      }
      if (!potentialRowAlreadyInCurrentBoard) {
        findValidSolutions(currentBoard.set(l, potentialRow), l + 1);
      }
    }
  };

  findValidSolutions(currentBoard, 0);
  if (solutionCount.length === 0) {
    solutionCount = defaultBoard.rows();
  }
  // let solutionCount = validCombinations.length;
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutionCount));
  return solutionCount;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  let solutionCount = 0;
  let helperBoard = new Board({n: n});
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(j === i ? 1 : 0);
    }
    helperBoard.set(i, temp);
  }
  let currentBoard = new Board({n: n});
  const findValidSolutions = function(currentBoard, l) {
    if (l === n) {
      if (!currentBoard.hasAnyQueensConflicts()) {
        solutionCount++;
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      let potentialRow = helperBoard.get(i);
      let potentialRowAlreadyInCurrentBoard = false;
      for (let j = 0; j < l; j++) {
        if (JSON.stringify(potentialRow) === JSON.stringify(currentBoard.get(j))) {
          potentialRowAlreadyInCurrentBoard = true;
        }
      }
      if (!potentialRowAlreadyInCurrentBoard) {
        findValidSolutions(currentBoard.set(l, potentialRow), l + 1);
      }
    }
  };

  findValidSolutions(currentBoard, 0);
  // let solutionCount = validCombinations.length;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
