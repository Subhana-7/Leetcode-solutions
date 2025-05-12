/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const result = [];
    const map = {};
    for (let i = 0; i < score.length; i++) {
        map[score[i]] = i;
    }
    score.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        result[map[score[i]]] = i < 3 ? ranks[i] : String(i + 1);
    }
    return result;
};