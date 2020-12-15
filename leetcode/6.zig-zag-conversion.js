// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);


const convert = (str, numRows) => {
    if (numRows <= 1) {
        return str;
    }

    const nonEmptyRowsNum = Math.min(numRows, str.length);
    let rows = new Array(nonEmptyRowsNum).fill().map(() => '');

    let currentRow = 0;
    let isGoingDown = false; // should go either up or down (down => true)

    for (let char of str) {
        if (currentRow === 0 || currentRow === numRows - 1) {
            isGoingDown = !isGoingDown;
        }
        rows[currentRow] += char;

        if (isGoingDown) {
            currentRow++;
        } else {
            currentRow--;
        }
    }

    return rows.join('');
};

console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR'); // PAHNAPLSIIGYIR
// console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI'); // PINALSIGYAHRPI
// console.log(convert('A', 4) === 'A'); // A
// console.log(convert('SICK', 5) === 'SICK'); // SICK