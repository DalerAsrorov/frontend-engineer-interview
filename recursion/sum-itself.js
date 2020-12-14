
const getSumUntil = (n) => {
    if (n == 1) {
        return 1;
    }
    return n + getSumUntil(n - 1);
};

console.log(getSumUntil(10));