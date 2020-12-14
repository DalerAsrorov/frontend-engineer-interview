
const drawRightTriangle = (n) => {
    let str = '';

    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n - i + 1; j++) {
            str += '* ';
        }

        str += '\n';
    }

    return str;
};

console.log(drawRightTriangle(5));

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
