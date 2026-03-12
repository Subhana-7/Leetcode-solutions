/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let missing = [];
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    for (let i = min; i < max; i++) {
        if (!nums.includes(i)) {
            missing.push(i)
        }
    }
    return missing.sort((a, b) => a - b);
};