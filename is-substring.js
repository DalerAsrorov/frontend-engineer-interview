// check if str1 is substring of str2
const isSubstring = (str1, str2) => {
    // find first character
    let startIndex = -1;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1.charAt(0)) {
            startIndex = i;
            break;
        }
    }

    if (startIndex === -1) {
        return false;
    }

    return str1 === str2.substring(startIndex, startIndex + str1.length);
};