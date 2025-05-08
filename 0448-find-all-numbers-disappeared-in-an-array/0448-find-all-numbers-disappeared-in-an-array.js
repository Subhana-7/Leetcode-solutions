/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = (nums, set = new Set(nums)) => {
    return nums.map((_, i) => i + 1).filter(v => !set.has(v));
};