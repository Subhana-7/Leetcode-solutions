/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
    let maxLength = Math.max(a.length, b.length);
    return a == b ? -1 : maxLength
};