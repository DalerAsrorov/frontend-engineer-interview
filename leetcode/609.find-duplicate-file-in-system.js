/**
 * Company (Dropbox)
 * My generic solution (not time efficient but passes the case)
 */

const regex = new RegExp(/\(\w+\)/, 'gi');

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicateInFileSystem = function (paths) {
    let contentMap = {};

    for (let path of paths) {
        const words = path.split(' ');
        const [dir, ...files] = words;
        contentMap[dir] = [...files];
    }

    let fileContentMap = {};

    for (let dir in contentMap) {
        const files = contentMap[dir];

        files.forEach((file) => {
            const [fileContent] = file.match(regex);
            fileContentMap[fileContent] = [...fileContentMap[fileContent] || [], `${dir}/${file}`];
        });
    }


    for (let content in fileContentMap) {
        fileContentMap[content] = fileContentMap[content].map(content => content.substring(0, content.lastIndexOf('(')));
    }

    return Object.values(fileContentMap).filter(files => files.length > 1);
};

const input = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"];

console.log(findDuplicateInFileSystem(input));

module.exports = findDuplicateInFileSystem;
