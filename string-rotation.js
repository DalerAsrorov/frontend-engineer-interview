/**
 * String rotation:
 * Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings,
 * s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle"
 * is a rotation of "erbottlewat")
 */

const isRotation = (str1, str2) => {
    return str1.length === str2.length && (str1 + str1).includes(str2);
};

console.log(isRotation('waterbottle', 'erbottlewat'));
console.log(isRotation('abcde', 'cdeab'));