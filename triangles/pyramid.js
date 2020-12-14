const drawTriangle = (n) => {
    let str = '';

    // outer loop for number of rows
    for (let i = 1; i <= n; i++) {
        for (let j = n - i; j > 0; j--) {
            str += '  ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            str += '* ';
        }
        str += '\n';
    }

    return str;
};

console.log(drawTriangle(5)); // 5 rows

//          * 
//        * * * 
//      * * * * * 
//    * * * * * * * 
//  * * * * * * * * * 