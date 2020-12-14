// s1 is always smaller than s2
const oneEditInsert = (s1, s2) => {
  let index1 = 0;
  let index2 = 0;

  while (index1 < s1.length && index2 < s2.length) {
    if (s1.charAt(index1) !== s2.charAt(index2)) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }

  return true;
};

// s1 and s2 are of the same length
const oneEditReplace = (s1, s2) => {
  let foundDiff = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) !== s2.charAt(i)) {
      if (foundDiff) {
        return false;
      }
      foundDiff = true;
    }
  }
  return true;
};

const isOneEditAway = (str1, str2) => {
  if (str1.length + 1 === str2.length) {
    return oneEditInsert(str1, str2);
  } else if (str1.length - 1 === str2.length) {
    return oneEditInsert(str2, str1);
  } else if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  }
  return false;
};

console.log(isOneEditAway("pale", "ple")); // true
console.log(isOneEditAway("pales", "pale")); // true
console.log(isOneEditAway("pale", "bale")); // true
console.log(isOneEditAway("pale", "bake")); // false
console.log(isOneEditAway("apple", "aplee")); // false
console.log(isOneEditAway("dale", "daler")); // true
