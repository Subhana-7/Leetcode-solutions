/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let freq = {}, maxFreq = 0, total = 0;

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] > maxFreq) maxFreq = freq[num];
    }

    for (let key in freq) {
        if (freq[key] === maxFreq) {
            total += freq[key];
        }
    }

    return total;
};