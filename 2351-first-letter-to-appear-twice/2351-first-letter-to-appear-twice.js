/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let freq = {};
    for (let str of s) {
        freq[str] = (freq[str] || 0) + 1;
        if (freq[str] == 2) {
            return str;
        }
    }
};