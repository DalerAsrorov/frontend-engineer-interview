/**
 * Company (Dropbox)
 * Efficient solution
 */

const regex = new RegExp(/\(\w+\)/, 'gi');

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicateInFileSystem = function (paths) {
    let map = new Map(); // string => set

    for (let path of paths) {
        const words = path.split(' ');
        const dir = words[0];

        for (let i = 1; i < words.length; i++) {
            const file = words[i];
            const contentStartIndex = file.indexOf('(');
            const content = file.substring(contentStartIndex);
            const fileNameWithoutContent = file.substring(0, contentStartIndex);
            const fileName = `${dir}/${fileNameWithoutContent}`;

            map.set(content, [...map.get(content) || [], fileName]);
        }
    }

    return [...map.values()].filter(files => files.length > 1);
};

const input = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"];

console.log(findDuplicateInFileSystem(input));

module.exports = findDuplicateInFileSystem;
