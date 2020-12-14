// Write a JavaScript program which accept a number as input and insert dashes (-)
// between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

const areEven = (num1, num2) => Number(num1) % 2 === 0 && Number(num2) % 2 === 0;

const addDashesForEvenIndexes = (number) => {
  return number
    .toString()
    .split("")
    .reduce((acc, curr, i) => {
      if (areEven(curr, number[i + 1])) {
        acc += curr + "-";
      } else {
        acc += curr;
      }
      return acc;
    }, "");
};

const testNum = "11234257888";
// 11234-2578-8-8

console.log(addDashesForEvenIndexes(testNum));
