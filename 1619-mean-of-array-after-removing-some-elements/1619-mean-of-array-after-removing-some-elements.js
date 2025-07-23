/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    let length = arr.length;
    let count = Math.floor(0.05 * length);
    let res = arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = count; i < length - count; i++) sum += res[i];
    let mean = length - 2 * count;
    return sum / mean;
};