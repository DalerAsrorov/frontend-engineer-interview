

const someFunc = (a, b, done) => {
    const result = a + b;
    done(`Result: ${result}`);

};

const exec = someFunc.bind(null, 3, 4);

exec((function (data) {
    console.log(data);
}));