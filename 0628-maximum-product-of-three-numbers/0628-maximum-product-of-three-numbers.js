/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => b - a);
    return nums[0] * nums[1] * nums[2];
};