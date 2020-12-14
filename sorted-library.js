// 25. Write a JavaScript function to sort the following array of objects by title value. Go to the editor
// Sample object :

const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245 },
];

const sortByProp = (arr, prop) => {
  if (!arr) {
    return null;
  }
  if (arr.length === 0) {
    return null;
  }

  return [...arr].sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    } else if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
};

console.log(sortByProp(library, "title"));
