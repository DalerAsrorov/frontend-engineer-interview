const sortListOfStrings = (strList) => {
  let strListCopy = [...strList];

  // first, sort each string in the list
  // O (a * s * log(s))
  for (let i = 0; i < strListCopy.length; i++) {
    strListCopy[i] = sortStr(strListCopy[i]);
  }
  // Then, sort the list using comparison
  // O (a * s * log(a))
  for (let i = 0; i < strListCopy.length; i++) {
    strListCopy.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
  }

  return strListCopy;
};

const sortStr = (str = "") =>
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

module.exports = sortListOfStrings;
