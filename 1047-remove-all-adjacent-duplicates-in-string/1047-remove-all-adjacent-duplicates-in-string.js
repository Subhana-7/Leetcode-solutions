/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let str = s.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            str.splice(i, 2);
            i = Math.max(i - 2, -1);
        }
    }
    return str.join("");
};