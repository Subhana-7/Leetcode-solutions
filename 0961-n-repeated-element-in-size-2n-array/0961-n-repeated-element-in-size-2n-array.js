/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let occ = {};
    for (let num of nums) {
        occ[num] = (occ[num] || 0) + 1;
    }
    let n = (nums.length) / 2;
    for (let key in occ) {
        if (occ[key] === n) {
            return Number(key);
        }
    }
};