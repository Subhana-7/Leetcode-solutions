/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
    const len = nums.length;
    let p = -1, q = -1, flag = -1, i = 1;
    while (i < len && nums[i - 1] < nums[i]) {
        i++;
    }
    p = i - 1;
    while (i < len && nums[i - 1] > nums[i]) {
        i++;
    }
    q = i - 1;
    while (i < len && nums[i - 1] < nums[i]) {
        i++;
    }
    flag = i - 1;
    return p !== 0 && q !== p && flag === len - 1 && flag !== q;
};