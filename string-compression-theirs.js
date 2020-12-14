/**
 * Implement a method to perform basic string compression using the counts of
 * repeated characters. For example, the string 'aabcccccaaa' would become a2b1c5a3.
 * If the "compressed" string would not become smaller than the original string, your method
 * should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).
 */
const getCompressedString = (str) => {
  const finalLength = getCompressedLength(str); // returns number
  if (str.length < finalLength) {
    return str;
  }

  let count = 0;
  let strBuilder = [];
  for (let i = 0; i < str.length; i++) {
    count++;

    if (i + 1 > str.length + 1 || str.charAt(i) !== str.charAt(i + 1)) {
      strBuilder.push(str.charAt(i), count);
      count = 0;
    }
  }

  return strBuilder.join("");
};

function getCompressedLength(str) {
  let count = 0;
  let compressedCount = 0;

  for (let i = 0; i < str.length; i++) {
    count++;

    if (i + 1 > str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressedCount += 1 + String.prototype.valueOf.call(count + "").length;
      count = 0;
    }
  }

  return compressedCount;
}

console.log(getCompressedString("aabcccccaaa")); // a2b1c5a3
console.log(getCompressedString("abcdefgh")); // abcdefgh
