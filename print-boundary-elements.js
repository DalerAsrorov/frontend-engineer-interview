// https://www.geeksforgeeks.org/boundary-elements-matrix/
// Given a matrix of size n x m. Print the boundary elements of the matrix. Boundary elements are those elements
// which are not surrounded by elements on all four directions, i.e. elements in first row, first column, last row and last column.

const printArrayBoundary = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;

    let str = '';
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                str += `${matrix[i][j]} `;
            } else {
                str += '  ';
            }
        }

        if (i < m - 1) {
            str += '\n';
        }
    }

    console.log(`Result:\n${str}`);

    return str;
};

const matrix = [
    [1, 2, 3, 4, 0],
    [1, 1, 1, 1, 2],
    [1, 2, 2, 2, 4],
    [1, 9, 3, 1, 7],
];

printArrayBoundary(matrix);