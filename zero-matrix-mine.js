const { generateMatrix } = require("./utils");

const hashKey = (row, column) => `${row}${column}`;

const zeroMatrix = (matrix) => {
  const M = matrix.length;
  const N = matrix[0].length;
  let visitedMap = new Map();

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 0 && !visitedMap.has(hashKey(i, j))) {
        visitedMap.set(hashKey(i, j), true);
        // iterate over all elements in the same column and assign 0
        for (let c = 0; c < N; c++) {
          if (matrix[i][c] !== 0) {
            visitedMap.set(hashKey(i, c), true);
            matrix[i][c] = 0;
          }
        }
        // iterate over all elements in the same row and assign 0
        for (let r = 0; r < M; r++) {
          if (matrix[r][j] !== 0) {
            visitedMap.set(hashKey(r, j), true);
            matrix[r][j] = 0;
          }
        }
      }
    }
  }
};

const A = [
  [9, 8, 5, 1, 8, 0, 7, 3, 4, 1, 2, 0],
  [1, 4, 3, 3, 8, 1, 6, 9, 3, 5, 7, 3],
  [2, 5, 0, 9, 5, 9, 6, 4, 8, 4, 7, 6],
  [4, 5, 2, 0, 8, 4, 3, 1, 0, 6, 4, 8],
  [9, 0, 9, 5, 7, 7, 0, 9, 2, 2, 0, 9],
  [2, 7, 6, 2, 1, 3, 0, 7, 0, 2, 7, 0],
  [6, 0, 2, 8, 9, 6, 6, 0, 9, 6, 7, 6],
  [3, 8, 8, 7, 0, 8, 9, 4, 7, 5, 6, 0],
  [0, 9, 7, 3, 1, 7, 3, 0, 9, 7, 8, 8],
  [6, 7, 1, 5, 3, 8, 3, 8, 6, 1, 7, 9],
  [2, 6, 3, 9, 1, 2, 2, 4, 1, 9, 7, 4],
  [8, 0, 4, 8, 8, 5, 8, 4, 2, 9, 1, 7],
];
const myOutput = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
];
const expected = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
zeroMatrix(A);
console.log(A);
