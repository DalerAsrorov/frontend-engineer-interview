const func = (arr) => {
  return arr.join(",");
};

const promisify = (func) => (...args) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(func(...args));
    }, 1500);
  });
};

// usage:
let promisedFunc = promisify(func);
promisedFunc([1, 2, 3]).then((response) => {
  console.log(response);
});
