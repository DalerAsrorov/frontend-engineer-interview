const mul = (a, b, c) => {
    return a * b * c;
};

const curry = (fn) => {
    const next = (...args) => {
        return (...x) => {
            const allArgs = [...x, ...args];

            if (fn.length <= allArgs.length) {
                return fn.apply(null, allArgs);
            }

            return next(...allArgs);
        };
    };

    return next();
};

const multiply = curry(mul);