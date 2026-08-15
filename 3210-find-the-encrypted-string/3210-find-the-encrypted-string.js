/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        ans += s[(i + k) % s.length];
    }

    return ans;
};