/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    let freqS = {};
    let freqT = {};

    for (let char of s) {
        freqS[char] = (freqS[char] || 0) + 1;
    }

    for (let char of target) {
        freqT[char] = (freqT[char] || 0) + 1;
    }

    let minCount = Infinity;

    for (let char in freqT) {
        if (!freqS[char]) return 0;
        minCount = Math.min(minCount, Math.floor(freqS[char] / freqT[char]));
    }

    return minCount;
};