/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let copied = [...new Set(arr)];
    copied.sort((a, b) => a - b);
    let store = {};

    for (let i = 0; i < copied.length; i++) {
        store[copied[i]] = i + 1;
    }
    return arr.map(n => store[n]);
};