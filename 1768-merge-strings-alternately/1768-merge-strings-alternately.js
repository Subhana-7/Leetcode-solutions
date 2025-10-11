/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let longestString;
    word1.length > word2.length ? longestString = word1.length : longestString = word2.length;
    let result = "";
    for (let i = 0; i < longestString; i++) {
        if (word1[i] !== undefined) result += word1[i];
        if (word2[i] !== undefined) result += word2[i];
    }
    return result;
};