
const topKFrequent = (nums, k) => {
    let buckets = Array(nums.length + 1); // array of lists
    const freqMap = nums.reduce((accum, curr) => {
        if (accum.has(curr)) {
            accum.set(curr, accum.get(curr) + 1);
        } else {
            accum.set(curr, 1);
        }
        return accum;
    }, new Map());

    for (let [num, freq] of freqMap.entries()) {
        if (!buckets[freq]) {
            buckets[freq] = [];
        }
        buckets[freq] = [...buckets[freq], num];
    }

    let mostFreqList = [];
    for (let i = buckets.length - 1; i >= 0 && mostFreqList.length < k; i--) {
        if (buckets[i]) {
            mostFreqList = [...mostFreqList, ...buckets[i]];
        }
    }

    return mostFreqList;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([6, 1, 1, 4, 5, 4, 3, 1, 2], 2)); // [1,4]
console.log(topKFrequent([6], 1)); // [1,4]
console.log(topKFrequent([6, 2], 2)); // [1,4]