/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
    let sub = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            sub++;
        } else {
            sub = 0;
        }
        if (sub === (k - 1)) return true
    }
    return false;
};