/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let a = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            a.push(nums[i])
        }
    }
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] % 2 !== 0)
            a.push(nums[j])
    }
    return a
};