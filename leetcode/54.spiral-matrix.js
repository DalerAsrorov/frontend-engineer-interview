// Given an m x n matrix, return all elements of the matrix in spiral order.

const spiralOrder = (matrix) => {
    let result = [];

    if (!matrix || !matrix.length) {
        return result;
    }
    const height = matrix.length;
    const width = matrix[0].length;
    const total = height * width;
    let up = 0;
    let down = height - 1;
    let left = 0;
    let right = width - 1;

    while (result.length < total) {
        for (let j = left; j <= right && result.length < total; j++) {
            result.push(matrix[up][j]);
        }
        for (let i = up + 1; i <= down - 1 && result.length < total; i++) {
            result.push(matrix[i][right]);
        }
        for (let j = right; j >= left && result.length < total; j--) {
            result.push(matrix[down][j]);
        }
        for (let i = down - 1; i >= up + 1 && result.length < total; i--) {
            result.push(matrix[i][left]);
        }

        left++;
        right--;
        up++;
        down--;
    }

    return result;
};

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [1,2,3,6,9,8,7,4,5]
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]); // [1,2,3,4,8,12,11,10,9,5,6,7]
