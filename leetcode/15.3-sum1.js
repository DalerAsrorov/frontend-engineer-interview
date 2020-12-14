/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    let result = [];

    if (!nums || nums.length === 0) {
        return result;
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (nums[i] !== nums[i - 1]) {
            const curr = i;
            let lo = i + 1;
            let hi = nums.length - 1;

            while (lo < hi) {
                const sum = nums[curr] + nums[lo] + nums[hi];

                if (sum < 0) {
                    lo++;
                } else if (sum > 0) {
                    hi--;
                } else {
                    result.push([nums[curr], nums[lo], nums[hi]]);
                    lo++;
                    hi--;
                    while (lo < hi && nums[lo] === nums[lo - 1]) {
                        lo++;
                    }
                }
            }
        }
    }

    return result;
};