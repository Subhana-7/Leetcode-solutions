/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let toBinary = i.toString(2);
        let j = toBinary.split("").filter(item => item === '1').length;
        if (k === j) count += nums[i];
    }
    return count;
};