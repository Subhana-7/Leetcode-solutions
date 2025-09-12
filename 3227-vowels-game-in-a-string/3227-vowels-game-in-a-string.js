/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
    let vowel = 'aeiou';
    for (let i = 0; i < s.length; ++i) {
        if (vowel.includes(s[i])) return true
    }
    return false;
};