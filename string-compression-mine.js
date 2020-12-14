/**
 * Implement a method to perform basic string compression using the counts of
 * repeated characters. For example, the string 'aabcccccaaa' would become a2b1c5a3.
 * If the "compressed" string would not become smaller than the original string, your method
 * should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).
 */
const getCompressedString = (str) => {
  let compressed = [];
  let counter = 1;

  for (let i = 0; i < str.trim().length; i++) {
    const char = str.charAt(i);
    const nextChar = str.charAt(i + 1);

    if (counter === 1) {
      compressed.push(char);
    }

    if (char !== nextChar) {
      compressed.push(counter);
      counter = 1;
    } else {
      counter++;
    }
  }

  return compressed.length > str.length ? str : compressed.join("");
};

console.log(getCompressedString("aabcccccaaa")); // a2b1c5a3
console.log(getCompressedString("abcdefgh")); // abcdefgh
