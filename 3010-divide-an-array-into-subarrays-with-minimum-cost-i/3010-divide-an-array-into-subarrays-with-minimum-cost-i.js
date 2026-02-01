/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    let sorted = nums.slice(1).sort((a, b) => a - b);

    return nums[0] + sorted[0] + sorted[1];
};