/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    for (let str in s) {
        if (s.includes(part)) {
            s = s.replace(part, "")
        }
    }
    return s;
};