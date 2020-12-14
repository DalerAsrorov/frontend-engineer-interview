const setZeroes = (matrix) => {
  const M = matrix.length; // rows
  const N = matrix[0].length; // columns
  const row = new Array(M).fill(false);
  const column = new Array(N).fill(false);

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (let i = 0; i < row.length; i++) {
    if (row[i] === true) {
      nullifyRow(matrix, i, N);
    }
  }
  for (let j = 0; j < column.length; j++) {
    if (column[j] === true) {
      nullifyColumn(matrix, j, M);
    }
  }
};

function nullifyRow(matrix, row, N) {
  for (let i = 0; i < N; i++) {
    matrix[row][i] = 0;
  }
}

function nullifyColumn(matrix, column, M) {
  for (let i = 0; i < M; i++) {
    matrix[i][column] = 0;
  }
}

const A = [
  [2, 3, 8, 0],
  [6, 4, 3, 1],
  [1, 3, 7, 1],
  [9, 2, 0, 9],
  [4, 3, 14, 15],
];

setZeroes(A);
console.log(A);
