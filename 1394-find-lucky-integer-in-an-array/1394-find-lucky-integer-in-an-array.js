/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
   const freqMap = new Map();
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    let lucky = -1;
    for (let [num, freq] of freqMap) {
        if (num === freq) {
            lucky = Math.max(lucky, num);
        }
    }
    return lucky;
};