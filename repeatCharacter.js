

function repeatCharacter(char, times) {
    let str = '';

    for (let i = 0; i < times; i++) {
        str += char;
    }

    return str;
}

const result = repeatCharacter('c', 3);