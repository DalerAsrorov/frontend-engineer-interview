// Given two strings, write a method to decide if one is a permutation of the other.

const sortStr = (str) =>
  str
    .split("")
    .sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    })
    .join("");

// Solution 1:
const arePermutations1 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  return sortStr(s1) === sortStr(s2);
};

// console.log(arePermutations1("abcdefg", "fgacdbe"));
// console.log(arePermutations1("abcdefg", "agacdbe"));

const arePermutations2 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const charCountMap = new Map();

  for (let s of s1) {
    if (!charCountMap.has(s)) {
      charCountMap.set(s, 1);
    } else {
      charCountMap.set(s, charCountMap.get(s) + 1);
    }
  }

  for (let t of s2) {
    if (!charCountMap.has(t)) {
      return false;
    }
    const freq = charCountMap.get(t) - 1;
    charCountMap.set(t, freq);
    // has more of the existing chars than s1
    if (charCountMap.get(t) < 0) {
      return false;
    }
  }

  return true;
};

// console.log(arePermutations2("abcdefg", "fgacdbe"));
// console.log(arePermutations2("abcdefg", "agecdbk"));
