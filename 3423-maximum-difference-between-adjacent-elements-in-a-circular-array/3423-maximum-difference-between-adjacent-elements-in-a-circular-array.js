/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let maxAbs = Math.abs(nums[0] - nums[nums.length - 1]);
    for (let i = 0; i < nums.length; i++) {
        let abs = Math.abs(nums[i] - nums[i + 1])
        if (abs > maxAbs) maxAbs = abs;
    }
    return maxAbs;
};