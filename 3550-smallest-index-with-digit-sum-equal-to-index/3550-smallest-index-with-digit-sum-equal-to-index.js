/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = sumDigits(nums[i]);
        if (num == i) {
            return i;
        }

    }
    return -1;
};

var sumDigits = function (num) {
    num = Math.abs(num);
    if (num < 10) return num;
    return (num % 10) + sumDigits(Math.floor(num / 10));
}