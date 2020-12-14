
// [1, [2, [[3]], [4, 5, 6]], [[[[[[7, 8, 9]]]]]]]
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Recursive solutiona
const flattenArray = (arr) => {
    return arr.reduce((accum, curr) => {
        if (Array.isArray(curr)) {
            return [...accum, ...flattenArray(curr)];
        }

        accum.push(curr);
        return accum;
    }, []);
};

console.log(flattenArray([[1, [2]], [3, 4]]));
// console.log(flattenArray([[1, [2, 3]], [4, [5, 6, 7]]]));
// console.log(flattenArray(['Dog', ['Sheep', ['Wolf']]]));