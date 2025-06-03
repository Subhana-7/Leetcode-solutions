/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const sorted = Object.entries(freq)
        .sort((a, b) => b[1] - a[1]) 
        .slice(0, k);

    return sorted.map(([num]) => Number(num));
};