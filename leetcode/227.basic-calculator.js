/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
    if (!s || !s.length) {
        return 0;
    }

    const len = s.length;
    let stack = [];
    let noSpaceStr = s.replace(/\s/g, '');
    let sign = '+'; // initial sign
    let currNumber = 0;

    for (let i = 0; i < len; i++) {
        let currChar = noSpaceStr[i];

        // is a number
        if (!isNaN(currChar)) {
            currNumber = currNumber * 10 + Number(currChar);
        }
        // is a sign or a last number
        if (isNaN(currChar) || i === len - 1) {
            if (sign === '+') {
                stack.push(currNumber);
            } else if (sign === '-') {
                stack.push(-currNumber);
            } else if (sign === '*') {
                stack.push(stack.pop() * currNumber);
            } else if (sign === '/') {
                const popped = stack.pop();
                stack.push(~~(popped / currNumber));
            }

            sign = currChar;
            currNumber = 0;
        }
    }

    let result = 0;
    while (stack.length) {
        result += stack.pop();
    }

    return result;
};
