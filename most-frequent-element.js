//     8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const findMostFrequentElement = (arr) => {
  const freqMap = arr.reduce((accum, curr) => {
    if (!accum[curr]) {
      accum[curr] = 1;
    } else {
      accum[curr] += 1;
    }
    return accum;
  }, {});

  let max = -Infinity;
  let freqElement = null;
  const entries = Object.entries(freqMap);

  for (let [element, count] of entries) {
    if (max < count) {
      max = count;
      freqElement = element;
    }
  }

  return freqElement;
};

const test1 = [3, "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(findMostFrequentElement(test1));
