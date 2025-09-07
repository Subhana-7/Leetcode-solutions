/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    const res = new Array(n);

    for (let i = 0; i < n - 1; i++) {
        res[i] = i + 1;
    }
    res[n - 1] = -((n - 1) * (n) / 2);
    return res;
};