/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    while (k > 0) {
        let v = Math.min(...nums)
        let i = nums.indexOf(v)
        nums[i] = - nums[i]
        k--
    }

    return nums.reduce((a, c) => a + c, 0)
};