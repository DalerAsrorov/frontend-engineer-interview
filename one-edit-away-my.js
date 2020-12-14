// Solution 1: Sort both strings

const isOneEditAway = (str1, str2) => {
  const n1 = str1.length;
  const n2 = str2.length;

  if (Math.abs(n2 - n1) > 1) {
    return false;
  }

  let cache = new Map();

  for (let i = 0; i < str1.length; i++) {
    const c = str1.charAt(i);
    if (!cache.has(c)) {
      cache.set(c, 1);
    } else {
      cache.set(c, cache.get(c) + 1);
    }
  }

  let diffCount = 0;
  for (let i = 0; i < str2.length; i++) {
    const c = str2.charAt(i);
    if (cache.has(c)) {
      cache.set(c, cache.get(c) - 1);
    }
  }

  for (let [char, count] of cache.entries()) {
    diffCount += count;
  }

  return diffCount <= 1;
};

console.log(isOneEditAway("pale", "ple"));
console.log(isOneEditAway("pales", "pale"));
console.log(isOneEditAway("pale", "bale"));
console.log(isOneEditAway("pale", "bake"));
console.log(isOneEditAway("apple", "aple"));
