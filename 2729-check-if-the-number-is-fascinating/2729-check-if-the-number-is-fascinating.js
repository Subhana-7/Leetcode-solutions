/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    let s = "" + n + (2 * n) + (3 * n)
    if (s.length !== 9) return false;
    if (s.includes('0')) return false;
    let freq = new Array(10).fill(0)
    for (let ch of s) {
        freq[Number(ch)]++;
    }
    for (let d = 1; d <= 9; d++) {
        if (freq[d] !== 1) return false;
    }
    return true;
};