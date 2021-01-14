
const COMMANDS = {
    APPEND: 'APPEND',
    BACKSPACE: 'BACKSPACE',
    UNDO: 'UNDO',
    REDO: 'REDO',
};

function sortInput(input) {
    input.sort((a, b) => a[0] < b[0] ? -1 : 1);
}

const textEditor = (input) => {
    let output = [];
    let undoHistory = [];
    let redoHistory = [];

    sortInput(input);

    for (let line of input) {
        const [order, command, val] = line;
        switch (command) {
            case COMMANDS.APPEND:
                output.push(val);
                undoHistory.push([order, command, output.length - 1, val]);
                redoHistory.pop();
                break;
            case COMMANDS.BACKSPACE:
                const lastIndex = output.length - 1;
                const lastWord = output[lastIndex];
                const lastChar = lastWord.charAt(lastIndex);

                output[lastIndex] = lastWord.slice(0, -1);
                undoHistory.push([order, command, lastIndex, lastChar]);
                redoHistory.pop();
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
