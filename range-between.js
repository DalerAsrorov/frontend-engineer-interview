// 41. Write a JavaScript function to generate an array between two integers of 1 step length. Go to the editor

const rangeBetween = (i, j) => {
  let arr = [];

  for (let k = i; k <= j; k++) {
    arr.push(k);
  }

  return arr;
};

// Test Data :
console.log(rangeBetween(4, 7));
// [4, 5, 6, 7]
console.log(rangeBetween(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
