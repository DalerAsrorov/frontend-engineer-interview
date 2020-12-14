const generateMatrix = (n, minRange = 1, maxRange = 10) => {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      const randNum = Math.floor(Math.random() * maxRange + minRange);
      matrix[i].push(randNum);
    }
  }

  return matrix;
};

module.exports = {
  generateMatrix,
};
