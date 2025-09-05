/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i <= nums.length; i++) {

        let count = 0;
        for (let num of nums) {
            if (num >= i) count++;
        }

        if (count === i) return i;
    }
    return -1;
};