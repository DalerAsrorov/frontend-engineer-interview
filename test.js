const sortListOfStrings = require("./strings-list-sort.js");
const powersOf2 = require("./powers-of-2.js");
const { assertEqual } = require("./assert.js");

const pairSumSequence = (n = 10) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let s = pairSum(i, i + 1);
    sum += s;
  }
  return sum;
};

const pairSum = (a, b) => a + b;
// assertEqual(pairSumSequence(10), 99);

const reverseArray = (arr = []) => {
  let arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length / 2; i++) {
    const other = arrCopy.length - i - 1;
    const temp = arrCopy[other];
    arrCopy[other] = arrCopy[i];
    arrCopy[i] = temp;
  }

  return arrCopy;
};

const arr = [1, 2, 3, 4, 5];
const arrB = reverseArray(arr);
// assertEqual(arr.reverse(), arrB);

const listOfStrs = ["xocjafds", "oivqcxqvgj", "asdfgklo"];
// console.log(sortListOfStrings(listOfStrs));

const n = 12;
powersOf2(n);
