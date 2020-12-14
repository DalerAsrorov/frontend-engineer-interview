// "Mr John Smith   "
// "Mr%20John%20Smith"

const SPACE_CHAR = "%20";

const urlify = (str, spaceChar = SPACE_CHAR) => {
  return str
    .trim()
    .split("")
    .reduce((accum, curr) => {
      if (curr === " ") {
        accum += "%20";
      } else {
        accum += curr;
      }
      return accum;
    }, "");
};

console.log(urlify("Mr John Smith   "));
