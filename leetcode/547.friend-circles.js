/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    const n = M.length;
    let visited = new Array(n).fill().map(() => false);
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(M, visited, i);
            count++;
        }
    }

    return count;
};

function dfs(M, visited, i) {
    let stack = [];
    visited[i] = true;
    stack.push(i);

    while (stack.length) {
        let top = stack.pop();

        for (let j = 0; j < M[top].length; j++) {
            if (!visited[j] && M[top][j] === 1) {
                visited[j] = true;
                stack.push(j);
            }
        }
    }
}