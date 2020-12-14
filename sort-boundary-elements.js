// Given a matrix mat[][] of size M*N, the task is to sort only the border elements of the matrix in
// the clockwise direction and print the matrix after sorting again.

const sortMatrixBorders = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;
    let valuesToSort = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                valuesToSort.push(matrix[i][j]);
            }
        }
    }

    valuesToSort.sort();

    // place sorted values into the first row
    for (let j = 0; j < n; j++) {
        matrix[0][j] = valuesToSort.shift();
    }
    // place sorted values into the last column
    for (let i = 1; i < m; i++) {
        matrix[i][n - 1] = valuesToSort.shift();
    }
    // place sorted values into the last row
    for (let j = n - 2; j >= 0; j--) {
        matrix[m - 1][j] = valuesToSort.shift();
    }
    // place the rest of the sorted values into the first column
    for (let i = m - 2; i > 0; i--) {
        matrix[i][0] = valuesToSort.shift();
    }
};

const matrixA = [
    [1, 2, 3, 4, 0],
    [1, 1, 1, 1, 2],
    [1, 2, 2, 2, 4],
    [1, 9, 3, 1, 7],
];

sortMatrixBorders(matrixA);
console.log(matrixA);
// 0 1 1 1 1
// 9 1 1 1 1
// 7 2 2 2 2
// 4 4 3 3 2

const matrixB = [
    [4, 2, 8, 0],
    [2, 6, 9, 8],
    [0, 3, 1, 7]
];
sortMatrixBorders(matrixB);
console.log(matrixB);
// 0 0 1 2
// 8 6 9 2
// 8 7 4 3

const matrixC = [
    [4, 3],
    [1, 2]
];
sortMatrixBorders(matrixC);
console.log(matrixC);
// 2 2
// 6 4