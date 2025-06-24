/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    let index = [], n = nums.length;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; j++) {
            if (nums[j] === key && Math.abs(i - j) <= k) {
                index.push(i);
                break;
            }
        }
    }
    return index;
};