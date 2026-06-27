/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let seen = new Set();

    for (let i of nums) {
        if (seen.has(i))
            return i;
        seen.add(i);
    }
};