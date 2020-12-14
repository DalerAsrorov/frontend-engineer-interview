// Given
var endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

//     getSkills = (endorsements) => {
//     // Result
//     // [
//     // { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
//     // { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
//     // { skill: 'html', user: ['Sue'], count: 1 }
//     // ];
//     }

const getSkills = (endorsements) => {
    const endorsementsMap = endorsements.reduce((accum, curr) => {
        const { skill, user } = curr;

        if (accum.has(skill)) {
            accum.set(skill, [...accum.get(skill), user]);
        } else {
            accum.set(skill, [user]);
        }

        return accum;
    }, new Map());

    let result = [];

    for (let [skill, user] of endorsementsMap.entries()) {
        result.push({
            skill,
            user,
            count: user.length || 0
        });
    }

    return result;
};

console.log(getSkills(endorsements));
