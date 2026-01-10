/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
    const n = s.length;
    let prev, count = 1;
    for (let i = 1; i < n; ++i) {
        if (s[i] !== s[i - 1]) {
            if (count === k) return true;
            count = 0;
        }
        count++;
    }
    return count === k;
};