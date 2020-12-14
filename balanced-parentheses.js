const areBalanced = (str) => {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '(') {
            stack.push('(');
        } else if (char === ')' && stack.length) {
            stack.pop();
        } else return false;
    }

    return stack.length === 0;
};
console.log(areBalanced('(())')); // true
console.log(areBalanced('(()))')); // false
console.log(areBalanced('()()()')); // true
console.log(areBalanced('()())()')); // false
console.log(areBalanced('))(')); // false