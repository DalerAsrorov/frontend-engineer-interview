const isOneEditAway = (str1, str2) => {
  // if one of the strings is lager by more than one character
  // then it's definitely not 1 edit away
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // determine shorter and bigger strings
  const s1 = str1.length > str2.length ? str2 : str1; // smaller string
  const s2 = str1.length < str2.length ? str1 : str2; // bigger string

  let index1 = 0;
  let index2 = 0;
  let foundDiff = false;
  while (index1 < s1.length && index2 < s2.length) {
    if (s1.charAt(index1) !== s2.charAt(index2)) {
      if (foundDiff) {
        return false;
      }
      foundDiff = true;

      // on replace operation, increase smaller pointer
      if (s1.length === s2.length) {
        index1++;
      }
    } else {
      // if they match then increase smaller pointer
      index1++;
    }
    // always increment the bigger pointer
    index2++;
  }

  return true;
};

console.log(isOneEditAway("pale", "ple")); // true
console.log(isOneEditAway("pales", "pale")); // true
console.log(isOneEditAway("pale", "bale")); // true
console.log(isOneEditAway("pale", "bake")); // false
console.log(isOneEditAway("apple", "aplee")); // false
