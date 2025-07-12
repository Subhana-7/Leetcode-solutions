/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let bar = 0, count = 0;
    for (let i = 0; i < s.length; i++) {
        if (bar % 2 === 0 && s[i] === '*') {
            count++;
        } else if (s[i] === '|') {
            bar++;
        }
    }
    return count;
};