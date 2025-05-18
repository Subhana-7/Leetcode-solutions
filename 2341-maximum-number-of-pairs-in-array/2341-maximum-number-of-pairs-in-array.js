/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let freq = {};
    for (let item of nums) {
        freq[item] = (freq[item] || 0) + 1;
    }
    let pairs = 0;
    let leftovers = 0;
    for (let item in freq) {
        pairs += Math.floor(freq[item] / 2);
        leftovers += freq[item] % 2;
    }
    return [pairs, leftovers];
};