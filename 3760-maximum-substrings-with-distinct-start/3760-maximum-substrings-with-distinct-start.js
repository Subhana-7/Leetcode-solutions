/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
    let set = new Set(s);
    return set.size;
};