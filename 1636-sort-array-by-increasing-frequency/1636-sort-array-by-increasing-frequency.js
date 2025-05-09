/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let freq = {};
    for (let item of nums) {
        freq[item] = (freq[item] || 0) + 1;
    }
    return nums.sort((a, b) => {
        const fa = freq[a], fb = freq[b];
        if (fa === fb) return b - a;
        return fa - fb;
    })
};