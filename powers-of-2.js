const powersOf2 = (n) => {
  if (n < 1) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    let prev = powersOf2(parseInt(n / 2));
    let curr = prev * 2;
    return curr;
  }
};

module.exports = powersOf2;
