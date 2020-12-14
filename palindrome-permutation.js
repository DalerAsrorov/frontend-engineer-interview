/**
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome
 * is a word or phrase that is the same forwards and backwards. A permutation is a rearrangment of
 * letters. The palindrome does not need to be limited to just dictionary words.
 * Example:
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco cta", etc.)
 * @param {*} str
 */

function buildCharTable(phrase) {
  const table = new Map();

  for (let i = 0; i < phrase.length; i++) {
    const c = phrase.charAt(i);

    if (!table.has(c)) {
      table.set(c, 1);
    } else {
      table.set(c, table.get(c) + 1);
    }
  }

  return table;
}

const isPermutationOfPalindrome = (phrase) => {
  const charTable = buildCharTable(phrase);

  let foundOdd = false;
  for (let [char, count] of charTable.entries()) {
    if (count % 2 === 1) {
      // If we encounter an odd number more than once
      // foundOde will be true by then
      if (foundOdd === true) {
        return false;
      }
      foundOdd = true;
    }
  }

  return true;
};

const result = isPermutationOfPalindrome("AaBb//a");
console.log(result);
