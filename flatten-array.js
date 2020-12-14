// [1, [2, [[3]], [4, 5, 6]], [[[[[[7, 8, 9]]]]]]]
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Iterative solution
const flattenArray = (arr) => {
    let newArr = [];

    while (arr.length) {
        let next = arr.pop();

        if (Array.isArray(next)) {
            arr = arr.concat(next);
            // arr = [...arr, ...next]
        } else {
            newArr.unshift(next);
            // newArr = [next, ...newArr]
        }
    }

    return newArr;
};

console.log(flattenArray([[1, [2]], [3, 4]]));
console.log(flattenArray([[1, [2, 3]], [4, [5, 6, 7]]]));
console.log(flattenArray(['Dog', ['Sheep', ['Wolf']]]));