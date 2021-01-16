
const COMMANDS = {
    APPEND: 'APPEND',
    BACKSPACE: 'BACKSPACE',
    UNDO: 'UNDO',
    REDO: 'REDO',
    SELECT: 'SELECT',
    BOLD: 'BOLD'
};

function sortInput(input, index = 0) {
    input.sort((a, b) => a[index] < b[index] ? -1 : 1);
}

const textEditor = (input) => {
    let output = [];
    let undoHistory = [];
    let redoHistory = [];
    let selectLine = [];

    sortInput(input);

    for (let line of input) {
        // val2 is used primarily in "SELECT" operation
        const [order, command, val, val2] = line;
        // used in 'APPEND' and 'BOLD' commands
        let outputValue = val;

        switch (command) {
            case COMMANDS.APPEND:
                if (selectLine.length) {
                    const startSlice = selectLine[2];
                    const endSlice = selectLine[3];

                    outputValue = output.pop() || '';
                    outputValue = outputValue.slice(0, startSlice) + val + outputValue.slice(endSlice);
                    selectLine.pop();
                }

                output.push(outputValue);
                undoHistory.push([order, command, output.length - 1, outputValue]);
                redoHistory.pop();
                break;
            case COMMANDS.BOLD:
                if (selectLine.length) {
                    const startSlice = selectLine[2];
                    const endSlice = selectLine[3];

                    outputValue = output.pop() || '';
                    outputValue = outputValue.slice(0, startSlice) + '*' + outputValue.slice(startSlice, endSlice) + '*' + outputValue.slice(endSlice);
                    output.push(outputValue);
                    selectLine.pop();
                }
                break;
            case COMMANDS.BACKSPACE:
                const lastIndex = output.length - 1;
                const lastWord = output[lastIndex];
                const lastChar = lastWord.charAt(lastIndex);

                if (selectLine.length) {
                    const startSlice = selectLine[2];
                    const endSlice = selectLine[3];

                    output[lastIndex] = lastWord.slice(0, startSlice) + lastWord.slice(endSlice);
                } else {
                    output[lastIndex] = lastWord.slice(0, -1);
                }

                undoHistory.push([order, command, lastIndex, lastChar]);
                redoHistory.pop();
                selectLine.pop();
                break;
            case COMMANDS.UNDO:
                if (undoHistory.length) {
                    const topUndoCommand = undoHistory.pop();
                    const [lastOrder, lastCommand, valueIndex, value] = topUndoCommand;

                    if (lastCommand === COMMANDS.APPEND) {
                        output.splice(valueIndex, 1);
                    } else if (lastCommand === COMMANDS.BACKSPACE) {
                        output[valueIndex] = output[valueIndex] + value;
                    }

                    redoHistory.push(topUndoCommand);
                }
                break;
            case COMMANDS.REDO:
                if (redoHistory.length) {
                    const topRedoCommand = redoHistory.pop();
                    const [lastOrder, lastCommand, valueIndex, value] = topRedoCommand;

                    if (lastCommand === COMMANDS.APPEND) {
                        output.splice(valueIndex, 0, value);
                    } else if (lastCommand === COMMANDS.BACKSPACE) {
                        output[valueIndex] = output[valueIndex] + value;
                    }
                }
                break;
            case COMMANDS.SELECT:
                selectLine = [order, command, val, val2];
                break;
            default:
                break;
        }
    }

    return output.join('');
};

const SAMPLE1 = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"]
];
const SAMPLE2 = [
    ["0", "APPEND", "Hey you"],
    ["1", "BACKSPACE"],
    ["2", "BACKSPACE"]
];
const SAMPLE3 = [
    ["0", "APPEND", "!"],
    ["1", "BACKSPACE"],
    ["2", "BACKSPACE"]
];
const SAMPLE4 = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"],
    ["3", "UNDO"],
    ["4", "UNDO"]
];
const SAMPLE5 = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "UNDO"]
];
const SAMPLE6 = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", " Daler"],
    ["3", "BACKSPACE"],
    ["4", "UNDO"],
    ["5", "UNDO"],
];
const SAMPLE7 = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "UNDO"]
];
const SAMPLE8 = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "UNDO"],
    ["3", "REDO"]
];
const SAMPLE9 = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "REDO"],
    ["3", "REDO"]
];
const SAMPLE10 = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "APPEND", " there"],
    ["3", "REDO"]
];
const SAMPLE11 = [
    ["1548185072722", "APPEND", "ey"],
    ["1548185072721", "APPEND", "H"]
];
const SAMPLE12 = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "1", "3"],
    ["1548185072723", "BACKSPACE"]
];
const SAMPLE13 = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "2", "5"],
    ["1548185072723", "APPEND", "y there"]
];
const SAMPLE14 = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "1", "3"],
    ["1548185072723", "BOLD"]
];

const SAMPLE15 = [["0", "APPEND", "This"],
["1", "APPEND", " is "],
["2", "BACKSPACE"],
["3", "APPEND", " a "],
["4", "APPEND", "second test"]];


console.log(textEditor(SAMPLE1) === "Hey there!");
console.log(textEditor(SAMPLE2) === "Hey y");
console.log(textEditor(SAMPLE3) === "");
console.log(textEditor(SAMPLE4) === "Hey");
console.log(textEditor(SAMPLE5) === "");
console.log(textEditor(SAMPLE6) === "Hey there");
console.log(textEditor(SAMPLE7) === "");
console.log(textEditor(SAMPLE8) === "Hey there");
console.log(textEditor(SAMPLE9) === "Hey");
console.log(textEditor(SAMPLE10) === " there");
console.log(textEditor(SAMPLE11) === "Hey");
console.log(textEditor(SAMPLE12) === "Hlo");
console.log(textEditor(SAMPLE13) === "Hey there");
console.log(textEditor(SAMPLE14) === "H*el*lo");
console.log(textEditor(SAMPLE15) === "This is a second test");
