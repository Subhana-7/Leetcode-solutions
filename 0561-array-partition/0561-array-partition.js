/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let sorted = nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < sorted.length; i += 2) {
        sum += nums[i]
    }
    return sum;
};