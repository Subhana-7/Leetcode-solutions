/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b);

    let groups = 1;
    let first = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - first > k) {
            groups++;
            first = nums[i];
        }
    }

    return groups;
};