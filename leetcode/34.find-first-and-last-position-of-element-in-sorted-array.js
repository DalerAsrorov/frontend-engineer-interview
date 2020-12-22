
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let lo = 0, hi = nums.length - 1;
    let start = -1, end = -1;
    let mid;

    if (!nums.length) {
        return [start, end];
    }

    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);

        if (nums[mid] === target) {
            start = mid;
            end = mid;

            if (nums[mid - 1] === target) {
                start = binarySearchLeft(nums, 0, mid - 1, target);
            }
            if (nums[mid + 1] === target) {
                end = binarySearchRight(nums, mid + 1, nums.length - 1, target);
            }

            break;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else if (nums[mid] > target) {
            hi = mid - 1;
        }
    }


    return [start, end];
};

function binarySearchLeft(nums, lo, hi, target) {
    let result = -1;
    let mid;

    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);

        if (nums[mid] === target) {
            result = mid;
            hi--;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else if (nums[mid] >= target) {
            hi = mid - 1;
        }
    }

    return result;
}

function binarySearchRight(nums, lo, hi, target) {
    let result = -1;
    let mid;

    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);

        if (nums[mid] === target) {
            result = mid;
            lo++;
        } else if (nums[mid] <= target) {
            lo = mid + 1;
        } else if (nums[mid] > target) {
            hi = mid - 1;
        }
    }

    return result;
}