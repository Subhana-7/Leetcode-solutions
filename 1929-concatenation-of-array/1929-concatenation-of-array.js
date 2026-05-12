/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let limit = 1, res = [];
    while (limit < 3) {
        for (let i = 0; i < nums.length; i++) {
            res.push(nums[i])
        }
        limit++;
    }
    return res;
};