/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let sum = 0, carry = 0;
    let result = '';

    while (i >= 0 || j >= 0) {
        const a = i >= 0 ? Number(num1.charAt(i)) : 0;
        const b = j >= 0 ? Number(num2.charAt(j)) : 0;

        sum = a + b + carry;
        carry = ~~(sum / 10);

        result = `${sum % 10}${result}`;

        i--;
        j--;
    }

    if (carry) {
        result = `1${result}`;
    }

    return result;
};