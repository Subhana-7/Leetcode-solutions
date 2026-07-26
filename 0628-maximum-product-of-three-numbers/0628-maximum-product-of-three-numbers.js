/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => b - a);
    let a = nums[0] * nums[1] * nums[2];
    let b = nums[nums.length - 1] * nums[nums.length - 2] * nums[0];
    return Math.max(a, b);
};