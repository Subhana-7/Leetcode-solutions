/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function (s, k) {
    let freq = {};

    for (let item of s) {
        freq[item] = (freq[item] || 0) + 1;
    }

    let freqValArray = Object.values(freq);

    if (freqValArray.length <= k) return 0;

    freqValArray.sort((a, b) => a - b);

    let del = 0;
    let remove = freqValArray.length - k;

    for (let i = 0; i < remove; i++) {
        del += freqValArray[i];
    }
    
    return del;
};