/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let n = nums[i];
        let result = 0;
        while (n) {
            result = (result * 10) + n % 10;
            n = n / 10 | 0;
        }
        nums.push(result);
    }
    let unique = [...new Set(nums)];
    return unique.length;
};