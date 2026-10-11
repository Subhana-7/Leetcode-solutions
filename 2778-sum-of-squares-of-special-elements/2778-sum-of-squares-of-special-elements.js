/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let n = nums.length;
    let sum = 0;
    for (let i = 1; i <= nums.length; i++) {
        if (n % i == 0) {
            let square = nums[i - 1] * nums[i - 1];
            sum += square;
        }
    }
    return sum;
};