/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let freq = {};
    for (let item of candyType) {
        freq[item] = (freq[item] | 0) + 1;
    }
    let unique = Object.keys(freq).length
    let halfLen = candyType.length / 2;
    return Math.min(unique, halfLen)
};