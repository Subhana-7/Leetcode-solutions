/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let count = 0, maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            count++;
            maxCount = Math.max(maxCount, count)
        } else {
            count = 0;
        }
    }
    return maxCount > 0 ? maxCount + 1 : 1;;
};