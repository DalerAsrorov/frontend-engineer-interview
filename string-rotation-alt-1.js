/**
 * String rotation:
 * Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings,
 * s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle"
 * is a rotation of "erbottlewat")
 */
const isRotation = (str1, str2) => {
    if (str1.length === null || str2.length === null) {
        return false;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    if (str1.length === 0) {
        return true;
    }

    for (let i = 0; i < str1.length; i++) {
        if (rotateString(str1, str2, i)) {
            return true;
        }
    }
    return false;
};

function rotateString(A, B, rotation) {
    for (let i = 0; i < A.length; i++) {
        console.log(`i: ${i}, rotation: ${rotation}, calc: ${(i + rotation) % B.length}`);
        if (A.charAt(i) !== B.charAt((i + rotation) % B.length)) {
            return false;
        }
    }
    return true;
}

console.log(isRotation('waterbottle', 'erbottlewat'));
// console.log(isRotation('waterbot', 'botttwater'));
// console.log(isRotation('abcde', 'cdeab'));