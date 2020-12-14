// 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor

const findMostFrequentChar = (arr) => {
  const cacheMap = arr.reduce((cache, curr) => {
    if (!cache.get(curr)) {
      cache.set(curr, 1);
    } else {
      cache.set(curr, cache.get(curr) + 1);
    }
    return cache;
  }, new Map());

  let freqChar = null;
  let maxCount = -1;
  for (let [char, count] of cacheMap) {
    if (maxCount < count) {
      maxCount = count;
      freqChar = char;
    }
  }

  return freqChar;
};

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const result = findMostFrequentChar(arr1);
console.log(result);
// Sample Output : a ( 5 times )
