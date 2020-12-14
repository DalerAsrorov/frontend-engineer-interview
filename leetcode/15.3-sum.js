function constructKey(triplet) {
    return `${triplet[0]}-${triplet[1]}-${triplet[2]}`;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    let resultMap = new Map();
    let seen = new Map();
    let dups = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!dups.has(nums[i])) {
            dups.add(nums[i]);
            for (let j = i + 1; j < nums.length; j++) {
                const complement = -nums[i] - nums[j];
                if (seen.has(complement) && seen.get(complement) == i) {
                    const triplets = [nums[i], nums[j], complement].sort();
                    resultMap.set(constructKey(triplets), triplets);
                }
                seen.set(nums[j], i);
            }
        }
    }

    return [...resultMap.values()];
};