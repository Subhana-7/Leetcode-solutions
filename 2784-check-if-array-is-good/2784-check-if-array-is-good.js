/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    let sorted = nums.sort((a, b) => a - b);
    let expected = [];
    for (let i = 1; i < nums.length; i++) {
        expected.push(i)
    }
    expected.push(nums.length - 1);
    return JSON.stringify(sorted) === JSON.stringify(expected)
};