// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit
// signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your
// function returns 0 when the reversed integer overflows.

// reverse a number without using strings

const reverseNumber = (number) => {
    const MAX_INT = Math.pow(2, 31);
    let result = 0;
    let isNegative = number < 0 ? true : false;

    if (isNegative) {
        number = Math.abs(number);
    }

    while (number > 0) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    result = isNegative ? -result : result;

    if (result > MAX_INT || result < -MAX_INT) {
        return 0;
    }

    return result;
};

console.log(reverseNumber(-12345));