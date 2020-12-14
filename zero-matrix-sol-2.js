const setZeroes = matrix => {
  let rowHasZero = false;
  let columnHasZero = false;

  // check if the first row has zero
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      rowHasZero = true;
      break;
    }
  }
  // check if the first column has zero
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      columnHasZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // nullify rows based on values in first column
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i);
    }
  }

  // nullify columns based on values in first row
  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      nullifyColumn(matrix, j);
    }
  }

  if (rowHasZero) {
    nullifyRow(matrix, 0);
  }
  if (columnHasZero) {
    nullifyColumn(matrix, 0);
  }
}

function nullifyRow (matrix, row) {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0
  }
}

function nullifyColumn (matrix, column) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0
  }
}

const A = [[1],[0]]

console.log('A: ', A)
setZeroes(A)
console.log(A)
