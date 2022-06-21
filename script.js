let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]
];

// start of my code
function getRow(puzzle, row) {
  let rowArray = [];
  return rowArray;
}

function getColumn(puzzle, col) {
  let colArray = [];
  return colArray;
}

function getSection(puzzle, x, y) {
  x *= 3;
  y *= 3;
  let section = [];

  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      section.push(puzzle[i][j]);
    }
    return section;
  }

  // write a funciton that will accept a subsection and check that it includes numbers 1-9.

  function includes1to9(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr.indexOf(i) === -1) {
        return false;
      } else {
        return true;
      }
    }
  }

  //sudoku checker function - I am stuck on this part and have been unable to move past it. I am missing some piece of the puzzle. I understand most of it, but am unsure where to go from here.
  function sudokuIsValid(p8zzle) {
    let checker = [];
  }
}

getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]

getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]

getColumn(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]

getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]

// This grabs the values from column 0 and row 1 (second from the top left)
getSection(puzzle, 1, 0);
// -> [ 7,4,2,9,6,3,5,8,1 ];